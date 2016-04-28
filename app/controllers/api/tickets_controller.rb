class Api::TicketsController < ApplicationController
  def update
    ids = params[:ticket_ids]

    @tickets = Ticket.where(id: ids, user_id: nil)

    if @tickets.count != ids.count
      @errors = ["Some of those seats have already been claimed"]
      render "api/errors"
    end

    @tickets.update_all(user_id: current_user.id)
    render :update
  end
end
