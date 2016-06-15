if user
  json.username user.username
  json.upcomingPerformances user.upcoming_performances
  json.allSpectacles user.all_spectacles
else
  json.username nil
end
