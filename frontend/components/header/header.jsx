var React = require('react'),
    UserNav = require('../user/user_nav'),
    Link = require('react-router').Link,
    FilterActions = require('../../actions/filter_actions');

var Header = React.createClass({

  toggleDance: function() {
    setTimeout(function() {
      FilterActions.setFilter({ category_ids: [1] });
    }, 0);  },

  toggleMusic: function() {
    setTimeout(function() {
      FilterActions.setFilter({ category_ids: [2] });
    }, 0);
  },

  toggleTheater: function() {
    setTimeout(function() {
      FilterActions.setFilter({ category_ids: [3] });
    }, 0);  },


  render: function() {
    return (
      <header className="header">
        <Link to="/">
          <img src="http://res.cloudinary.com/bencalabrese/image/upload/v1462344962/splash_page/color_logo.svg"
            alt="logo"
            className="logo"/>
        </Link>

        <nav>
          <Link to="/events" onClick={this.toggleDance}>
            Dance
          </Link>

          <Link to="/events" onClick={this.toggleMusic}>
            Music
          </Link>

          <Link to="/events" onClick={this.toggleTheater}>
            Theater
          </Link>
        </nav>

        <UserNav/>
      </header>
    );
  }

});

module.exports = Header;
