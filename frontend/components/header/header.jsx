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
          <a href="#">Music</a>
          <a href="#">Dance</a>
          <a href="#">Theater</a>
          <a href="#">Site Tour</a>
        </nav>

        <input type="search" className="search-bar" placeholder="search"/>

        <UserNav/>
      </header>
    );
  }

});

module.exports = Header;
