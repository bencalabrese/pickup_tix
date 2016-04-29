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
    params.require(:filter).permit(*Spectacle::FILTER_PARAM_KEYS)
  end
end
