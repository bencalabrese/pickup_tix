var SpectacleServerActions = require('../actions/spectacle_server_actions'),
    browserHistory = require('react-router').browserHistory;

var SpectacleApiUtil = {
  fetchAllSpectacles: function() {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/spectacles',
      success: function(fetchedSpectacles) {
        console.log(fetchedSpectacles);
        console.log("hello");
        SpectacleServerActions.receiveAllSpectacles(fetchedSpectacles);
      },
      error: function(response) {
      }
    });
  },

  fetchSingleSpectacle: function(id) {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/spectacles/' + id,
      success: function(fetchedSpectacle) {
        SpectacleServerActions.receiveSingleSpectacle(fetchedSpectacle);
      },
      error: function(response) {
      }
    });
  }
};

module.exports = SpectacleApiUtil;
