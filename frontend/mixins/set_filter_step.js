var FilterActions = require('../actions/filter_actions');

var CurrenUserStateMixin = {
  goToCategories: function() {
    FilterActions.updateFilterStep(1);
  },

  goToDates: function() {
    FilterActions.updateFilterStep(2);
  },

  goToVenueSize: function() {
    FilterActions.updateFilterStep(3);
  },

  goToTags: function() {
    FilterActions.updateFilterStep(4);
  }
};

module.exports = CurrenUserStateMixin;
