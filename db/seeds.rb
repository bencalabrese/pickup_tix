# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)


def gen_spectacles(venue)
  4.times do
    Spectacle.create!(
      venue: venue,
      title: Faker::Name.title,
      description: Faker::Lorem.paragraph(2),
      image_url: "http://www.placekitten.com/240/140"
    )
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
  gen_spectacles(venue)
end
