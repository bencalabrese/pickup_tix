var React = require('react'),
    CartStore = require('../../stores/cart'),
    SpectacleModalNav = require('./spectacle_modal_nav'),
    SpectacleModalDetail = require('./spectacle_modal_detail');

var SpectacleModal = React.createClass({
  getInitialState: function() {
    return {
      performance: CartStore.performance(),
      cartStatus: CartStore.cartStatus(),
      tickets: CartStore.tickets()
    };
  },

  render: function() {
    var content;

    return (
      <div className="spectacle-modal">
        <SpectacleModalDetail spectacle={this.props.spectacle}/>
        <SpectacleModalNav cartStatus={this.state.cartStatus}/>
      </div>
    );
  }

});

module.exports = SpectacleModal;
