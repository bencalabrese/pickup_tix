if user
  json.extract! user, :username
else
  json.username nil
end
