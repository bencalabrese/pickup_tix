var React = require('react'),
    CategoryPicker = require('./category_picker'),
    DateRangePicker = require('./date_range_picker');

var FiltersIndex = React.createClass({
  render: function() {
    var content;

    switch (this.props.filterStep) {
      case 1:
        content = <CategoryPicker/>;
        break;

      case 2:
        content = <DateRangePicker/>;
        break
    }

    return content;
  }
});


module.exports = FiltersIndex;
