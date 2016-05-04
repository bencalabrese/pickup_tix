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
  var newParams = $.extend(true, {}, params);

  var date_range = newParams.date_range;

  if (date_range) {
    newParams.date_range = [date_range[0].format(), date_range[1].format()];
  }

  var namespacedParams = { filter: newParams };
  if (!$.param(namespacedParams)) {
    namespacedParams = { filter: { none: true } };
  }

  return namespacedParams;
}

module.exports = SpectacleClientActions;
