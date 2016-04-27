class Api::SpectaclesController < ApplicationController
  def index
    @spectacles = Spectacle.all
    render :index
  end

  def show
    @spectacle = Spectacle.find(params[:id])
    render :show
  end
end
