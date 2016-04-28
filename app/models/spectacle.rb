# == Schema Information
#
# Table name: spectacles
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  image_url   :string           not null
#  venue_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spectacle < ActiveRecord::Base
  validates :title, :description, :image_url, :venue, presence: true
  validates :title, uniqueness: true

  belongs_to :venue
  has_many :seats, through: :venue

  has_many :performances

  def first_performance
    performances.order(:datetime).first.datetime
  end

  def last_performance
    performances.order(datetime: :desc).first.datetime
  end
end
