var React = require('react'),
    SpectaclesIndex = require('../spectacles/spectacles_index');

var Splash = React.createClass({
  render: function() {
    return (
      <div className="splash">
        <div className="splash-spectacles-index">
          <div className="coming-up">
            <h5>Coming Up</h5>
            <a href="#">View all events</a>
          </div>

          <SpectaclesIndex/>

          <button>View all events</button>
        </div>
      </div>
    );
  }
});

module.exports = Splash;
