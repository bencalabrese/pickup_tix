var SpectacleApiUtil = require('../util/spectacle_api_util');

var ClientActions = {
  fetchAllSpectacles: function() {
    SpectacleApiUtil.fetchAllSpectacles();
  },

  fetchSingleSpectacle: function() {
    SpectacleApiUtil.fetchSingleSpectacle();
  }
};

module.exports = ClientActions;
