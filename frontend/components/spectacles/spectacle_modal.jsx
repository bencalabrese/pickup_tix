var React = require('react'),
    SpectacleModalNav = require('./spectacle_modal_nav');

var SpectacleModal = React.createClass({

  render: function() {
    var spectacle = this.props.spectacle;

    return (
      <div className="spectacle-modal">
        <div className="spectacle-modal-content">
          I'm an event modal for {spectacle.title}
        </div>

        <SpectacleModalNav/>
      </div>
    );
  }

});

module.exports = SpectacleModal;
