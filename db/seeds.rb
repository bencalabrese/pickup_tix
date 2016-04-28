# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)


User.create!(username: "Guest", password: "password")

def gen_spectacles(venue)
  4.times do
    spectacle = Spectacle.create!(
      venue: venue,
      title: Faker::Name.title,
      description: Faker::Lorem.paragraph(2),
      image_url: "http://www.placekitten.com/240/140"
    )

    gen_performances(spectacle)
  end
end

def gen_performances(spectacle)
  first_performance = Date.today

  first_performance += 1 while !first_performance.thursday?
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
  %w(Orchestra Mezzanine Balcony).each do |section_name|
    section = Section.create!(name: section_name, venue: venue)
    gen_seat_blocks(section)
  end
end

def gen_seat_blocks(section)
  3.times do
    seat_block = SeatBlock.create!(style: "red", section: section)
    gen_seats(seat_block)
  end
end

def gen_seats(seat_block)
  10.times do |i|
    Seat.create!(seat_block: seat_block, name: "#{i}")
  end
end

5.times do
  venue = Venue.create!(name: Faker::Name.first_name)

  gen_sections(venue)

  # refetch data from database
  venue = Venue.find(venue)
  gen_spectacles(venue)
end
