# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Spectacles

- `GET /api/spectacles`
  - StageEvents index/search
  - accepts `query_params` to list spectacles by tags, venue-size, etc.
- `GET /api/spectacles/:id`

### Performances

- `GET /api/performances/:id`

### Ticketings
- `POST /api/perfomances/:perfomance_id/ticketings`
  - add creates ticketing between current_user and performance
