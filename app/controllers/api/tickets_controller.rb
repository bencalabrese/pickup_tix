class Api::TicketsController < ApplicationController
  def assign_tickets
    ids = params[:ticket_ids]

    @tickets = Ticket.where(id: ids, user_id: nil).all

    if @tickets.count != ids.count
      @errors = ["Some of those seats have already been claimed"]
    end

    if !logged_in?
      @errors = ["You must be logged in to book seats"]
    end

    render "api/errors", status: 403 if @errors

    @tickets.update_all(user_id: current_user.id)
    render :update
  end
end
