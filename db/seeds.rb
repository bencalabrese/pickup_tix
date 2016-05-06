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
  current_performance = current_performance.change(offset: "PDT")

  3.times do |week|
    4.times do |day|
      Performance.create!(spectacle: spectacle, datetime: current_performance)
      current_performance += 1.days
    end

    current_performance += 3.days
  end
end
#
# def gen_section(venue, section_name)
#   section = Section.create!(name: section_name, venue: venue)
#   gen_seat_blocks(section)
# end


def gen_seat_block(section, style, row_count, col_count)
  seat_block = SeatBlock.create!(style: style, section: section)
  gen_seats(seat_block, row_count, col_count)
end

def gen_seats(seat_block, row_count, col_count)
  alpha = ("A".."Z").to_a

  row_count.times do |row|
    col_count.times do |col|

      Seat.create!(
        seat_block: seat_block,
        row: row,
        col: col,
        name: "#{seat_block.section.name} #{seat_block.id}: #{alpha[row]}#{col + 1}"
      )
    end
  end
end

venue_names = [
  "The SF Playhouse",
  "The Curran Theater",
  "The EXIT Stage Left",
  "The Ashby Stage",
  "The Fillmore"
]

venue_names.each do |name|
  venue = Venue.create!(name: name)
end

venues = Venue.all

orch_styles = ["-10,10,15", "0,0,0", "10,10,-15"]
mezz_styles = ["0,0,10", "0,0,-10"]
# Actual Venue seeding
# SF Playhouse
sf_playhouse = venues[0]

sfp_orch = Section.create(venue: sf_playhouse, name: "Orchestra")
sfp_mezz = Section.create(venue: sf_playhouse, name: "Mezzanine")

orch_styles.each { |style| gen_seat_block(sfp_orch, style, 5, 4) }
mezz_styles.each { |style| gen_seat_block(sfp_mezz, style, 5, 8) }




def gen_spectacles(category_id, items)
  venues = Venue.all

  items.each do |item|
    spectacle = Spectacle.create!(
    category_id: category_id,
    venue: venues.first,
    title: item[0],
    description: item[1],
    image_url: item[2]
    )

    gen_taggings(spectacle)

    gen_performances(spectacle)
  end
end

path = Rails.root.join("db", "data")
dances = File.readlines(path.join("dances.txt")).map(&:chomp).map { |dance| dance.split("*") }
musics = File.readlines(path.join("music.txt")).map(&:chomp).map { |music| music.split("*") }
theaters = File.readlines(path.join("theater.txt")).map(&:chomp).map { |theater| theater.split("*") }

gen_spectacles(1, [dances.first])
# gen_spectacles(2, musics)
# gen_spectacles(3, theaters)
