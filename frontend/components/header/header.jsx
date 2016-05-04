var React = require('react'),
    UserNav = require('../user/user_nav'),
    Link = require('react-router').Link;

var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <Link to="/">
          <img src="http://res.cloudinary.com/bencalabrese/image/upload/c_scale,w_162/v1462344962/Color_Logo_zxcvpk.svg"
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
