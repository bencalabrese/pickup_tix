# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)


User.create!(username: "Guest", password: "password")
Category.create(name: "Dance")
Category.create(name: "Music")
Category.create(name: "Theater")

TAG_NAMES = %w(Ballet Jazz Tap Swing Rock Country Rap Classical Comedy Drama Shakespeare)

tags = TAG_NAMES.map { |tag| Tag.create!(name: tag) }

def gen_spectacles(venue)
  4.times do
    spectacle = Spectacle.create!(
      category_id: rand(1..3),
      venue: venue,
      title: Faker::Name.title,
      description: Faker::Lorem.paragraph(2),
      image_url: "http://www.placekitten.com/240/140"
    )

    gen_taggings(spectacle)

    gen_performances(spectacle)
  end
end

def gen_taggings(spectacle)
  picked_tags = (1..11).to_a.sample(2)

  Tagging.create(spectacle: spectacle, tag_id: picked_tags.first)
  Tagging.create(spectacle: spectacle, tag_id: picked_tags.last)
end

def gen_performances(spectacle)
  first_performance = Date.today - 3.weeks

  first_performance += 1 while !first_performance.thursday?
  first_performance += rand(1..5).weeks

  current_performance = first_performance.to_datetime + 20.hours

  3.times do |week|
    4.times do |day|
      Performance.create!(spectacle: spectacle, datetime: current_performance)
      current_performance += 1.days
    end

    current_performance += 3.days
  end
end

def gen_sections(venue)
  %w(Orchestra).each do |section_name|
    section = Section.create!(name: section_name, venue: venue)
    gen_seat_blocks(section)
  end
end

def gen_seat_blocks(section)
  styles = ["-10,10,15", "0,0,0", "10,10,-15"]

  3.times do |i|
    seat_block = SeatBlock.create!(style: styles[i], section: section)
    gen_seats(seat_block)
  end
end

def gen_seats(seat_block)
  alpha = ("A".."Z").to_a

  5.times do |row|
    4.times do |col|

      Seat.create!(
        seat_block: seat_block,
        row: row,
        col: col,
        name: "#{seat_block.section.name} #{seat_block.id}: #{alpha[row]}#{col + 1}"
      )
    end
  end
end

5.times do
  venue = Venue.create!(name: Faker::Name.first_name)

  gen_sections(venue)

  # refetch data from database
  venue = Venue.find(venue)
  gen_spectacles(venue)
end
