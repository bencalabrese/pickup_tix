# == Schema Information
#
# Table name: performances
#
#  id           :integer          not null, primary key
#  datetime     :datetime         not null
#  spectacle_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Performance < ActiveRecord::Base
  validates :datetime, :spectacle, presence: true
  validates :datetime, uniqueness: { scope: :spectacle }

  belongs_to :spectacle
  has_many :seats, through: :spectacle

  has_many :tickets

  def available_seats
    seats - unavailable_seats
  end

  def unavailable_seats
    Seat.joins(:tickets).where("tickets.performance_id = ?", self.id)
  end
end
