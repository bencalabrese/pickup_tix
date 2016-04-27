# == Schema Information
#
# Table name: sections
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  venue_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Section < ActiveRecord::Base
  validates :venue, :name, presence: true

  belongs_to :venue
  has_many :seat_blocks
  has_many :seats, through: :seat_blocks
end
