var SpectacleServerActions = require('../actions/spectacle_server_actions'),
    browserHistory = require('react-router').browserHistory;

var SpectacleApiUtil = {
  fetchSpectaclesByParams: function(params) {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/spectacles?' + $.param(params),
      success: function(fetchedSpectacles) {
        SpectacleServerActions.receiveFilteredSpectacles(fetchedSpectacles);
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
