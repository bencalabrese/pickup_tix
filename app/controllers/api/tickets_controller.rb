class Api::TicketsController < ApplicationController
  def assign_tickets
    ids = params[:ticket_ids]

    @tickets = Ticket.where(id: ids, user_id: nil)

    if @tickets.count != ids.count
      @errors = ["Some of those seats have already been claimed"]
      render "api/errors", status: 403
    end

    @tickets.update_all(user_id: current_user.id)
    render :update
  end
end
