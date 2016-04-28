# == Schema Information
#
# Table name: seats
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  seat_block_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Seat < ActiveRecord::Base
  validates :name, :seat_block, presence: true
  validate :unique_seat_in_venue

  def unique_seat_in_venue
    seats = seat_block.section.venue.seats

    if seats.any? { |venue_seat| venue_seat.name == name }
      errors.add(
        :non_unique_name, "venue already has a seat with this name"
      )
    end
  end

  belongs_to :seat_block
  has_one :section, through: :seat_block
  has_one :venue, through: :section

  has_many :tickets
end
