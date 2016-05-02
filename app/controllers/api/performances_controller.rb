class Api::PerformancesController < ApplicationController
  def show
    @performance = Performance.includes(:tickets).find(params[:id])
    render :show
  end
end
