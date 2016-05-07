var React = require('react');
var PropTypes = React.PropTypes;

var SiteDescription = React.createClass({

  render: function() {
    return (
      <div className="site-description">
        <div className="text">
          <h2>Find the events you want to see.</h2>
          <br></br>

          <p>
            PickupTix is the best way to find and book seats to your favorite performances. Want to see a big broadway production? No problem. Open mic at a local café? Yep. Thursday night at the ballet? PickupTix has you covered.
          </p>
          <br></br>
          <p>Once you've found your next night out, plan ahead by picking exactly which seats you want. Never worry about being struggling to find seats together. Your entire experience can be planned here at PickupTix.</p>
        </div>

        <div className="pictures">
          <img className="dancer" src="http://res.cloudinary.com/bencalabrese/image/upload/v1462578969/splash_page/dancer.svg"/>
          <img className="music-notes" src="http://res.cloudinary.com/bencalabrese/image/upload/v1462578974/splash_page/eighth-note.svg"/>
          <img className="mask" src="http://res.cloudinary.com/bencalabrese/image/upload/v1462578965/splash_page/mask.svg"/>
        </div>
      </div>
    );
  }

});

module.exports = SiteDescription;
