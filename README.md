# PickupTix

[Site page][heroku]

[heroku]: http://www.pickuptix.io

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

- [X] create project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin forms
- [X] detect signed in vs. not signed in user

### Phase 2: Flux Architecture and Router (1 days)

**Objective:** Set up basic components for index and splash pages

- [X] React views
- [X] Splash page
- [X] Components set-up with dummy divs for spacing
- [X] Basic styling of header, footer and main content box spacing
- [X] Live on Heroku

### Phase 3: Venues Model, Spectacles Model (1 days)

**Objective:** Spectacles can be created, read, edited and destroyed through
the terminal.

- [ ] Venues have sections, seat_blocks, and seats
- [ ] Spectacles have seats through their venue
- [ ] Venues can have multiple Spectacles

### Phase 4: Styling (0.5 days)

**Objective:** Existing pages will look presentable and have correct spacing.

- [ ] Layout for SpectaclesIndex
- [ ] Layout for SpectaclesIndexItem
- [ ] Make it pretty

### Phase 5: Perfomances Model, Ticketings Model API, and basic ApiUtil (1 days)

**Objective:** Performances can be read, through the API.

- [ ] Performances have seats through their Spectacle
- [ ] API can read seats from `performance`
- [ ] API can read remaining seats and booked seats
- [ ] API allows booking of remaining seats

### Phase 6: Tags (0.5 day)

**Objective:** Spectacles can be tagged with multiple tags, tags are searchable.

- [ ] Search by tags
- [ ] Also search by dates and venue size

### Phase 7: Search Bar and Filtering Views (1 day)

**Objective:** Views for search bar and filter page

- [ ] Search Bar searches by Spectacle name
- [ ] Filtering allows searches to be broken down by tags, venue size, and dates
- [ ] SpectaclesStore updates according to filter and displays results

### Phase 8: SpectacleDetail Modal and Checkout process (2 days)

**Objective:** Spectacles can be seen in detail. Create ticketings through UI.

- [ ] Spectacle detail modal shows individual Spectacle
- [ ] Pick performances, seats (from dropdown), checkout in modal
- [ ] Style modal

### Phase 9: Seed and build logo (1 day)

**Objective:** Create logo and seed data

- [ ] SVG logo with sticks to be used in multiple places
- [ ] Seed several Spectacles with pictures (est. 200 needed)

### Phase 10: Style review and Splash layout (2 day)

**Objective:** Layout splash and refine style on all pages.

- [ ] Create Jumbotron and details
- [ ] Add small spectacle index to splash
- [ ] Review and refine style on all pages

### Phase 11: Users page with user purchase history (0.5 days)

**Objective:** Users page

- [ ] Sidebar with upcoming performances
- [ ] See all upcoming Spectacles and all past Spectacles attended

### Bonus Features (TBD)
- [ ] Seat picker in purchase modal
- [ ] Recommendation engine in Rails
- [ ] Display recommended Spectacles
- [ ] Animations
- [ ] Users can create new spectacles (lowest priority)
