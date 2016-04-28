var React = require('react'),
    SpectacleModalNav = require('./spectacle_modal_nav');

var SpectacleModal = React.createClass({

  render: function() {
    var spectacle = this.props.spectacle;

    return (
      <div>
        I'm an event modal for {spectacle.title}
        <SpectacleModalNav/>
      </div>
    );
  }

});

module.exports = SpectacleModal;
