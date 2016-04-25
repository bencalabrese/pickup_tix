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
- [ ]

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

### Phase 2: Notes Model, API, and basic APIUtil (1.5 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Notes can be created, read, edited and destroyed with the
user interface.

- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ]
- [ ]
- [ ]

### Phase 5: Notebooks (1 day)

**Objective:** Notes belong to Notebooks, and can be viewed by notebook.

- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

Phase 3 adds organization to the Notes. Notes belong to a Notebook,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

### Phase 7: Allow Complex Styling in Notes (0.5 days)

**objective:** Enable complex styling of notes.

- [ ]
- [ ]
- [ ]

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ]
- [ ]
- [ ]

### Bonus Features (TBD)
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
