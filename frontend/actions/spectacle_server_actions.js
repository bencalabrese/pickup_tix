var SpectacleConstants = require('../constants/spectacle_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var ServerActions = {
  receiveAllSpectacles: function(fetchedSpectacles) {
    dispatcher.dispatch({
      actionType: SpectacleConstants.RECEIVE_ALL_SPECTACLES,
      fetchedSpectacles: fetchedSpectacles
    });
  },

  recieveSingleSpectacle: function(fetchedSpectacle) {
    dispatcher.dispatch({
      actionType: SpectacleConstants.RECEIVE_SINGLE_SPECTACLE,
      fetchedSpectacle: fetchedSpectacle
    });
  },
};

module.exports = ServerActions;
