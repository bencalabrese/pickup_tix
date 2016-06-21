desc "Called by Heroku scheduler"
task reset_users: :environment do
  Ticket.where.not(user_id: 2).update_all(user_id: nil)
  User.where.not(id: [1, 2]).delete_all

  performances = Performance.includes(:tickets).order("random()").limit(8)

  performances.each do |performance|
    performance.available_tickets.limit(rand(1..6)).update_all(user_id: 1)
  end
end

task update_performance_dates: :environment do
  Performance.find_each.reverse_each do |p|
    p.update(datetime: p.datetime + 7.days)
  end
end
