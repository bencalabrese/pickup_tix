var React = require('react');

var SpectaclesIndexItem = React.createClass({
  render: function() {
    var spectacle = this.props.spectacle;

    return (
      <div className="spectacle-thumbnail">
        <img src={spectacle.image_url} alt={spectacle.title}/>
        <h4>{spectacle.title}</h4>
        <p>{spectacle.description}</p>
      </div>
    );
  }
});

module.exports = SpectaclesIndexItem;
