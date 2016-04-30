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
  validates :title, :description, :image_url, :venue, :category, presence: true
  validates :title, uniqueness: true

  belongs_to :venue
  belongs_to :category
  has_many :seats, through: :venue
  has_many :performances
  has_many :taggings
  has_many :tags, through: :taggings

  FILTER_PARAM_KEYS = [
    :keyword,
    :random,
    :limit,
    {
      category_ids: [],
      date_range: [],
      tag_ids: [],
      venue_size: []
    }
  ]

  def self.find_by_filter_params(params = {})
    return [] if params[:none]

    keyword_where  = params[:keyword] ? ["title LIKE ?", "%#{params[:keyword]}%"] : [nil]
    category_ids   = params[:category_ids]
    category_where = params[:category_ids] ? { category_id: category_ids } : nil
    order_type     = params[:random] ? "random()" : nil
    limit          = params[:limit]

    if params[:date_range]
      performances_join  = :performances
      date_min, date_max = params[:date_range]
      performances_where = { performances: { datetime: (date_min..date_max) } }
    end

    if params[:tag_ids]
      taggings_join      = :taggings
      tag_ids            = params[:tag_ids]
      taggings_where     = { taggings: { tag_id: tag_ids } }
    end

    if params[:venue_size]
      seats_join         = { venue: [{sections: [{seat_blocks: :seats}]}] }
      seat_min, seat_max = params[:venue_size]
      seats_group        = "spectacles.id"
      seats_having       = ["COUNT(DISTINCT seats.id) BETWEEN ? AND ?", seat_min, seat_max]
    else
      seats_having   = [nil]
    end

    self.where(*keyword_where)
        .where(category_where)
        .joins(performances_join)
        .where(performances_where)
        .joins(taggings_join)
        .where(taggings_where)
        .joins(seats_join)
        .group(seats_group)
        .having(*seats_having)
        .order(order_type)
        .limit(limit)
  end

  def self.exclusionary_params?(params)
    (params[:category_ids] && params[:category_ids].empty?) ||
      (params[:tag_ids] && params[:tag_ids].empty?)
  end

  def first_performance
    performances.order(:datetime).first.datetime
  end

  def last_performance
    performances.order(datetime: :desc).first.datetime
  end
end
