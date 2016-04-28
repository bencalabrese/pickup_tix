var SpectacleApiUtil = require('../util/spectacle_api_util');

var SpectacleClientActions = {
  fetchAllSpectacles: function() {
    SpectacleApiUtil.fetchAllSpectacles();
  },

  fetchSingleSpectacle: function(id) {
    SpectacleApiUtil.fetchSingleSpectacle(id);
  }
};

module.exports = SpectacleClientActions;
