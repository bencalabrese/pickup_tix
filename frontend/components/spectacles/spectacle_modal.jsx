var React = require('react'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    CartStore = require('../../stores/cart'),
    SpectacleStore = require('../../stores/spectacle'),
    SpectacleModalNav = require('./spectacle_modal_nav'),
    SpectacleModalDetail = require('./spectacle_modal_detail'),
    PerformancePicker = require('./performance_picker'),
    SeatPicker = require('./seat_picker'),
    OrderConfirmation = require('./order_confirmation');

var SpectacleModal = React.createClass({
  getInitialState: function() {
    return {
      performance: CartStore.performance(),
      cartStatus: CartStore.cartStatus(),
      tickets: CartStore.tickets(),
      spectacle: SpectacleStore.find(this.props.id)
    };
  },

  componentWillMount: function() {
    this.spectacleListener = SpectacleStore.addListener(this._onChange);
    this.cartListener = CartStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.spectacleListener.remove();
    this.cartListener.remove();
  },

  _onChange: function() {
    this.setState({
      performance: CartStore.performance(),
      cartStatus: CartStore.cartStatus(),
      tickets: CartStore.tickets(),
      spectacle: SpectacleStore.find(this.props.id)
    });
  },

  render: function() {
    var content;

    switch (this.state.cartStatus) {
      case "closed":
        content = (
          <ReactCSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <SpectacleModalDetail
                spectacle={this.state.spectacle}
                key="detail"/>
          </ReactCSSTransitionGroup>
        );
        break;

      case "picking performance":
        content = (
          <ReactCSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <PerformancePicker
                key="dates"
                performances={this.state.spectacle.performances}/>
          </ReactCSSTransitionGroup>
        );
        break;

      case "picking seats":
        content = (
          <ReactCSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <SeatPicker key="seats"/>
          </ReactCSSTransitionGroup>
        );
        break;

      case "confirmation":
        content = (
          <ReactCSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <OrderConfirmation key="confirmation"/>
          </ReactCSSTransitionGroup>
        );
        break;
    }

    return (
      <div className="spectacle-modal">
        {content}
        <SpectacleModalNav cartStatus={this.state.cartStatus}/>
      </div>
    );
  }
});

module.exports = SpectacleModal;
