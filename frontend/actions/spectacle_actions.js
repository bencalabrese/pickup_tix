var SpectacleApiUtil = require('../util/spectacle_api_util');

var SpectacleClientActions = {
  fetchSpectaclesByParams: function(params) {
    var preparedParams = preparedFetchParams(params);
    SpectacleApiUtil.fetchSpectaclesByParams(preparedParams);
  },

  fetchSingleSpectacle: function(id) {
    SpectacleApiUtil.fetchSingleSpectacle(id);
  }
};

function preparedFetchParams(params) {
  var dates = params.date_range;

  if (dates) {
    params.date_range = [dates[0].format(), dates[1].format()];
  }

  var namespacedParams = { filter: params };
  if (!$.param(namespacedParams)) {
    namespacedParams = { filter: { none: true } };
  }

  return namespacedParams;
}

module.exports = SpectacleClientActions;
