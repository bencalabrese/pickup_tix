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

  after_create :generate_tickets

  belongs_to :spectacle
  has_one :venue, through: :spectacle

  has_many :tickets

  def generate_tickets
    spectacle.venue.seats.each do |seat|
      Ticket.create!(seat: seat, performance: self)
    end
  end

  def available_tickets
    tickets.where(user_id: nil)
  end

  def unavailable_tickets
    tickets.where.not(user_id: nil)
  end
end
