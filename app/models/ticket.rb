# == Schema Information
#
# Table name: tickets
#
#  id             :integer          not null, primary key
#  performance_id :integer          not null
#  seat_id        :integer          not null
#  user_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Ticket < ActiveRecord::Base
  validates :seat, :user, :performance, presence: true
  validates :seat, uniqueness: { scope: :performance }
  validate :seat_belongs_to_performance

  def seat_belongs_to_performance
    if performance.seats.none? { |p_seat| p_seat == seat }
      errors.add(incorrect_seat: "seat does not belong to performance")
    end
  end

  belongs_to :seat
  belongs_to :user
  belongs_to :performance
end
