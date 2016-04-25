# PickupTix

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

PickupTix is a web application for event ticketing inspired by EventBrite
focused on a clean and engaging UI. It will at minimum satisfy the folowing criteria:

- [ ] New user signup, login, and demo login
- [ ] Bug-free navigation
- [ ] Engaging seed data
- [ ] Searchable events, event tags/categories, reserving tickets for multiple events and for multiple nights, reservation history
- [ ] Visually appealing styling on all pages with feedback for user interactions

## Product Goals and Priorities

PickupTix will allow users to do the following:

- [ ] Create an account (MVP)
- [ ] Login/Logout, including a demo account (MVP)
- [ ] Search and browse shows across multiple categories (MVP)
- [ ] Reserve seats to specific performances (MVP)
- [ ] Review reservation history and upcoming reservations (MVP)
- [ ] Use a seat-picker to reserve particular seats (expected feature, but not MVP)
- [ ] Receive recommended events based upon their reservation history and preferences (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin forms
- [ ] detect signed in vs. not signed in user

### Phase 2: Venues Model, StageEvents Model (1 days)

**Objective:** StageEvents can be created, read, edited and destroyed through
the terminal.

- [ ] Venues have sections, seat_blocks, and seats
- [ ] StageEvents have seats through their venue
- [ ] Venues can have multiple StageEvents

### Phase 3: Flux Architecture and Router (1 days)

**Objective:** Set up basic components for index and splash pages

- [ ] React views for indexing all ShowEvents
- [ ] Splash page
- [ ] Components set-up with dummy divs for spacing

### Phase 4: Perfomances Model, Ticketings Model API, and basic ApiUtil (1.5 days)

**Objective:** Performances can be read, through the API.

- [ ] Performances have seats through their StageEvent
- [ ] API can read seats from `show`
- [ ] API can read remaining seats and booked seats
- [ ] API allows booking of remaining seats

### Phase 5: Start Styling (1 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] Make it pretty

### Phase 6: Tags (1.5 days)

**Objective:** StageEvents can be tagged with multiple tags, and tags are searchable.

- [ ] Search by tags
- [ ] Also search by dates and venue size

Just didn't make it this far. No excuses- will finish up today.

### Bonus Features (TBD)
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
