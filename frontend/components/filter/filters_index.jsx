var React = require('react'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    CategoryPicker = require('./category_picker'),
    DateRangePicker = require('./date_range_picker'),
    VenueSizePicker = require('./venue_size_picker'),
    TagPicker = require('./tag_picker');

var FiltersIndex = React.createClass({
  getInitialState: function() {
    return { filterStep: this.props.filterStep };
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ filterStep: newProps.filterStep });
  },

  render: function() {
    var content;

    switch (this.state.filterStep) {
      case 1:
        content = (
          <ReactCSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <CategoryPicker key="categories"/>
          </ReactCSSTransitionGroup>
        );
        break;

      case 2:
        content = (
          <ReactCSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <DateRangePicker key="dates"/>
          </ReactCSSTransitionGroup>
        );
        break;

      case 3:
        content = (
          <ReactCSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <VenueSizePicker key="venueSizes"/>
          </ReactCSSTransitionGroup>
        );
        break;

      case 4:
        content = (
          <ReactCSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <TagPicker key="tags"/>
          </ReactCSSTransitionGroup>
        );
        break;
    }

    return content;
  }
});


module.exports = FiltersIndex;
