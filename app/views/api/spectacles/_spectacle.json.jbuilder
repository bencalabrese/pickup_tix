json.extract! spectacle, :title, :description, :image_url, :id
json.category spectacle.category.name

json.first_performance spectacle.first_performance
json.last_performance spectacle.last_performance

if performances_needed
  json.performances spectacle.performances,
    partial: "api/performances/performance",
    as: :performance,
    tickets: false

  json.venue spectacle.venue.name
end
