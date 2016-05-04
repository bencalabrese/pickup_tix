var React = require('react'),
    UserNav = require('../user/user_nav'),
    Link = require('react-router').Link;

var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <Link to="/">
          <img src="http://res.cloudinary.com/bencalabrese/image/upload/v1462344962/splash_page/color_logo.svg"
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
