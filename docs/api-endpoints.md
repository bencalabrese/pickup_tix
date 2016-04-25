# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

*edit*
So focused on finding the answer to this question (and others) that I didn't read the days assignment which, naturally, had the answer.

~~I have a few questions about implementing users and sessions with React
I'd love to implement on the front-end, but see some pitfalls. Any best
practices with that?~~



## JSON API

### Notes

- `GET /api/stage_events`
  - StageEvents index/search
  - accepts `query_params` to list stage_events by tags, venue-size, etc.
- `GET /api/stage_events/:id`

### Performances

- `GET /api/performances/:id`

### Ticketings
- `POST /api/perfomances/:perfomance_id/ticketings`
  - add creates ticketing between current_user and performance
