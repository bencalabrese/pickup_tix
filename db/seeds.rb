# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)


User.create!(username: "Guest", password: "password")
User.create!(username: "Dummy", password: "password")
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
      performance = Performance.create!(spectacle: spectacle, datetime: current_performance)
      assign_dummy_tickets(performance)
      current_performance += 1.days
    end

    current_performance += 3.days
  end
end

def assign_dummy_tickets(performance)
  count = performance.available_tickets.count
  performance.available_tickets
             .order("random()")
             .limit(rand(count / 1.5))
             .update_all(user_id: 2)
end

def assign_guest_tickets
  performances = Performance.includes(:tickets).order("random()").limit(8)

  performances.each do |performance|
    performance.available_tickets.limit(rand(1..6)).update_all(user_id: 1)
  end
end

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
  "PianoFight"
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

sfp_orch = Section.create!(venue: sf_playhouse, name: "Orchestra")
sfp_mezz = Section.create!(venue: sf_playhouse, name: "Mezzanine")

orch_styles.each { |style| gen_seat_block(sfp_orch, style, 4, 3) }
mezz_styles.each { |style| gen_seat_block(sfp_mezz, style, 4, 6) }

# The Curran Theater
curran_theater = venues[1]

curran_orch = Section.create!(venue: curran_theater, name: "Orchestra")
curran_mezz = Section.create!(venue: curran_theater, name: "Mezzanine")

orch_styles.each { |style| gen_seat_block(curran_orch, style, 5, 4) }
mezz_styles.each { |style| gen_seat_block(curran_mezz, style, 5, 8) }

# EXIT Stage Left
stage_left = venues[2]

stage_left_main = Section.create!(venue: stage_left, name: "Main")
stage_left_block = SeatBlock.create!(style: "0,0,0", section: stage_left_main)

stage_left_seats = [
  [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9], [0,10], [0,11],
         [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], [1,10], [1,11],
         [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9], [2,10], [2,11],
                [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9], [3,10], [3,11],
]

alpha = ("A".."Z").to_a

stage_left_seats.each do |seat|
  row = seat.first
  col = seat.second

  Seat.create!(
    name: "#{alpha[row]}#{col}",
    row: row,
    col: col,
    seat_block: stage_left_block
  )
end

# Ashby Stage
ashby = venues[3]

ashby_main = Section.create(venue: ashby, name: "Main")

gen_seat_block(ashby_main, mezz_styles.first, 6, 3)
gen_seat_block(ashby_main, mezz_styles.second, 6, 4)

# PianoFight
pianofight = venues[4]

pianofight_main = Section.create!(venue: pianofight, name: "Café")
pianofight_block = SeatBlock.create!(style: "0,0,0", section: pianofight_main)

pianofight_seats = [
  [1,1], [2,0], [3,1],  [2,2],
  [0,5], [2,5], [1,4],  [1,6],
  [1,9], [3,9], [2,10], [2,8]
]

alpha = ("A".."Z").to_a

pianofight_seats.each do |seat|
  row = seat.first
  col = seat.second

  Seat.create!(
  name: "#{alpha[row]}#{col}",
  row: row,
  col: col,
  seat_block: pianofight_block
  )
end

def gen_spectacles(category_id, items)
  venues = Venue.all

  items.each do |item|
    spectacle = Spectacle.create!(
      category_id: category_id,
      venue: venues.sample,
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

gen_spectacles(1, dances)
gen_spectacles(2, musics)
gen_spectacles(3, theaters)
assign_guest_tickets
