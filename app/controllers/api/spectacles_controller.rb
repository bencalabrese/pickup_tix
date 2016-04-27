class Api::SpectaclesController < ApplicationController
  def index
    @spectacles = Spectacle.all.take(6)
    render :index
  end

  def show
    @spectacle = Spectacle.find(params[:id])
    render :show
  end
end
