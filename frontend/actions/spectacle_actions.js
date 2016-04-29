var SpectacleApiUtil = require('../util/spectacle_api_util');

var SpectacleClientActions = {
  fetchSpectaclesByParams: function(params) {
    var namespacedParams = { filter: params };
    SpectacleApiUtil.fetchSpectaclesByParams(namespacedParams);
  },

  fetchSingleSpectacle: function(id) {
    SpectacleApiUtil.fetchSingleSpectacle(id);
  }
};

module.exports = SpectacleClientActions;
