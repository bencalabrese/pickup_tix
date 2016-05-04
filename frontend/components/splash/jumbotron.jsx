var React = require('react'),
    Link = require('react-router').Link;
var PropTypes = React.PropTypes;

var Jumbotron = React.createClass({

  render: function() {
    return (
      <div className="jumbotron">
        <div className="jumbotron-tag">
          <img src="http://res.cloudinary.com/bencalabrese/image/upload/v1462344962/splash_page/white_logo.svg"/>
          <h3>All of your favorite events - together at last</h3>
          <Link to="/events">Explore</Link>
        </div>
      </div>
    );
  }

});

module.exports = Jumbotron;
