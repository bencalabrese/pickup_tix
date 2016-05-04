var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer>
        <a href="#">About</a>
        <a href="https://github.com/bencalabrese">GitHub</a>
        <a href="https://www.linkedin.com/in/bcalabrese">LinkedIn</a>
        <a href="mailto:bencalabrese@gmail.com">Contact</a>
      </footer>
    );
  }
});

module.exports = Footer;
