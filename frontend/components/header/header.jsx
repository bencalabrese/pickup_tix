var React = require('react'),
    UserNav = require('../user/user_nav');

var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <img src="https://placekitten.com/150/75"
             alt="logo"
             className="logo"/>

        <nav>
          <a href="#">link</a>
          <a href="#">link</a>
          <a href="#">link</a>
          <a href="#">link</a>
        </nav>

        <input type="search"/>

        <UserNav/>
      </header>
    );
  }

});

module.exports = Header;
