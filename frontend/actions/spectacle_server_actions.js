var SpectacleConstants = require('../constants/spectacle_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var SpectacleServerActions = {
  receiveFilteredSpectacles: function(fetchedSpectacles) {
    dispatcher.dispatch({
      actionType: SpectacleConstants.RECEIVE_FILTERED_SPECTACLES,
      fetchedSpectacles: fetchedSpectacles
    });
  },

  receiveSingleSpectacle: function(fetchedSpectacle) {
    dispatcher.dispatch({
      actionType: SpectacleConstants.RECEIVE_SINGLE_SPECTACLE,
      fetchedSpectacle: fetchedSpectacle
    });
  },
};

module.exports = SpectacleServerActions;
