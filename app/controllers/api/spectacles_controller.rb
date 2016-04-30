class Api::SpectaclesController < ApplicationController
  def index
    @spectacles = Spectacle.find_by_filter_params(filter_params)
    render :index
  end

  def show
    @spectacle = Spectacle.find(params[:id])
    render :show
  end

  private
  def filter_params
    filter_params = params.require(:filter).permit(
      :none,
      :keyword,
      :random,
      :limit,
      category_ids: [],
      date_range: [],
      tag_ids: [],
      venue_size: [],
    )

    if filter_params[:date_range]
      filter_params[:date_range].map! { |date| DateTime.parse(date) }
    end

    filter_params
  end
end
