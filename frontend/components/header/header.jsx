var React = require('react'),
    UserNav = require('../user/user_nav'),
    Link = require('react-router').Link;

var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <Link to="/">
          <img src="https://placekitten.com/150/40"
            alt="logo"
            className="logo"/>
        </Link>

        <nav>
          <Link to="/events">Music</Link>
          <Link to="/events">Dance</Link>
          <Link to="/events">Theater</Link>
          <a href="#">Site Tour</a>
        </nav>

        <UserNav/>
      </header>
    );
  }

});

module.exports = Header;
