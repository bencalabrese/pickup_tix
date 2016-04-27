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
  validates :name, uniqueness: { scope: :venue }

  belongs_to :seat_block
  has_one :section, through: :seat_block
  has_one :venue, through: :section

  # TODO
  # validate uniqueness of seat name by venue
end
