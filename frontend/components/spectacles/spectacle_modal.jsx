var React = require('react');

var SpectacleModal = React.createClass({

  render: function() {
    return (
      <div>
        I'm an event modal for {this.props.spectacle.title}
      </div>
    );
  }

});

module.exports = SpectacleModal;
