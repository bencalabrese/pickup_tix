tickets ||= false

json.id performance.id
json.datetime performance.datetime
json.availableTicketCount performance.available_tickets.count

if tickets
  ticket_map = {}

  tickets.each do |ticket|
    ticket_map[ticket.seat_id] = {
      name: ticket.seat.name,
      available: !ticket.user_id,
      id: ticket.id
    }
  end

  json.venueMap = performance.venue.gen_sections_matrix(ticket_map)
end
