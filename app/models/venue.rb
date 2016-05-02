# == Schema Information
#
# Table name: venues
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Venue < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :sections
  has_many :seat_blocks, through: :sections
  has_many :seats, through: :seat_blocks

  has_many :spectacles

  def gen_sections_matrix(tickets)
    sections.map do |section|
      {
        name: section.name,
        seat_blocks: section.gen_seat_blocks_matrix(tickets)
      }
    end
  end
end
