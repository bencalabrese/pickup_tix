class Api::PerformancesController < ApplicationController
  def show
    @performance = Performance
      .includes(tickets: [:seat], venue: [sections: {seat_blocks: [:seats]}])
      .find(params[:id])
    render :show
  end
end
