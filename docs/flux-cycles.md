## StageEvent Cycles

### StageEvents API Request Actions

* `fetchStageEvents`
  0. invoked from `StageEventsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/stage_events` is called with `queryParams` as a parameter
  0. `receiveStageEvents` is set as the callback.

* `fetchSingleStageEvent`
  0. invoked from `StageEventModal` `didMount`/`willReceiveProps`
  0. `GET /api/stage_events/:id` is called.
  0. `receiveSingleStageEvent` is set as the callback.


### StageEvents API Response Actions

* `receiveStageEvents`
  0. invoked from an API callback.
  0. `StageEvent` store updates `_stageEvents` and emits change.

* `receiveSingleStageEvent`
  0. invoked from an API callback.
  0. `StageEvent` store updates `_stageEvents[id]` and emits change.

### Store Listeners

* `StageEventsIndex` component listens to `StageEvent` store.
* `StageEventModal` component listens to `StageEvent` store.


## Cart Cycles

* `openCart`
  0. invoked from reserve tickets button `onClick`
  0. `Cart` store updates `_cart[status]` and emits change.

* `addSingleSeat`
  0. invoked from `SeatPicker` seat `onClick`
  0. `Cart` store adds `_cart[selectedSeats[id]]` and emits change.

* `removeSingleSeat`
  0. invoked from `SeatPicker` seat `onClick`
  0. `Cart` store removes `_cart[selectedSeats[id]]` and emits change.

### Carts API Request Actions

* `fetchSinglePerformance`
  0. invoked from `PerformancePicker` select seats button `onClick`
  0. `GET /api/performances/:id` is called
  0. `receiveSinglePerformance` is set as the callback.

* `createTicketings`
  0. invoked from `CartCheckout` button `onClick`
  0. `POST /api/ticketings` is called.
  0. `receiveTicketings` is set as the callback.

### Carts API Response Actions

* `receiveSinglePerformance`
  0. invoked from an API callback
  0. `Cart` store updates `_cart[performance]` and emits change.

* `receiveTicketings`
  0. invoked from an API callback
  0. `Cart` store updates `_cart[status]` and emits change.

### Store Listeners

* `StageEventModal` component listens to `Cart` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `StageEventSearch` `onChange` when there is text
  0. `GET /api/stage_events` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `StageEventSearch` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchSuggestions` component listens to `SearchSuggestion` store.

## QueryParams Cycles

* `addQueryParam`
  0. invoked from `ParamsIndexItem` click
  0. adds `param` to `_params[paramType]`

* `removeQueryParam`
  0. invoked from `ParamsIndexItem` click
  0. removes `param` to `_params`

* `resetQueryParamType`
  0. invoked from `CurrentParams` click
  0. resets `_params[paramType]`

### Store Listeners

* `QueryResults` component listens to `QueryParam` store.
