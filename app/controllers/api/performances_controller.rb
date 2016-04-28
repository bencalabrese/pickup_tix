class Api::PerformancesController < ApplicationController
  def show
    @perfomance = Performance.includes(:tickets).find(params[:id])
    render :show
  end
end
