var React = require('react'),
    SpectacleClientActions = require('../../actions/spectacle_actions'),
    SpectacleStore = require('../../stores/spectacle'),
    SpectaclesIndexItem = require('./spectacles_index_item');

var SpectaclesIndex = React.createClass({
  getInitialState: function() {
    return { spectacles: SpectacleStore.all() };
  },

  componentDidMount: function() {
    this.listener = SpectacleStore.addListener(this._onChange);
    SpectacleClientActions.fetchAllSpectacles();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ spectacles: SpectacleStore.all() });
  },

  render: function() {
    var spectacles = this.state.spectacles.map(function(spectacle) {
      return <SpectaclesIndexItem
                key={spectacle.id}
                spectacle={spectacle}/>;
    });

    return (
      <div className="spectacles-index">
        {spectacles}
      </div>
    );
  }
});

module.exports = SpectaclesIndex;
