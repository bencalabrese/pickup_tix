var React = require('react'),
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
        content = <CategoryPicker/>;
        break;

      case 2:
        content = <DateRangePicker/>;
        break;

      case 3:
        content = <VenueSizePicker/>;
        break;

      case 4:
        content = <TagPicker/>;
        break;
    }

    return content;
  }
});


module.exports = FiltersIndex;
