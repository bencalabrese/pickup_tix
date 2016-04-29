class Tagging < ActiveRecord::Base
  validates :tag, :spectacle, presence: true
  validates :tag, uniqueness: { scope: :spectacle }

  belongs_to :tag
  belongs_to :spectacle
end
