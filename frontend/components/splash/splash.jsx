var React = require('react'),
    Link = require('react-router').Link,
    SpectaclesIndex = require('../spectacles/spectacles_index');

var Splash = React.createClass({
  render: function() {
    return (
      <div className="splash">
        <div className="splash-spectacles-index">
          <div className="coming-up">
            <h5>Coming Up</h5>
            <Link to="events">View all events</Link>
          </div>

          <SpectaclesIndex/>

          <Link to="events" className="button">View all events</Link>
        </div>
      </div>
    );
  }
});

module.exports = Splash;
