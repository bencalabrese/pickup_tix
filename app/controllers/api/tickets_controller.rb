class Api::TicketsController < ApplicationController
  def update
    ids = params[:ticket_ids]
    Ticket.where(id: ids).update_all(user_id: current_user.id)

    @tickets = Ticket.where(id: ids)
    render :update
  end
end
