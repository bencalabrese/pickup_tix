if user
  json.username user.username
  json.upcomingPerformances user.upcoming_performances
  json.spectacleIds user.spectacle_ids
else
  json.username nil
end
