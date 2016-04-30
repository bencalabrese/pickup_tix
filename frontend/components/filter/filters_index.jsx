var React = require('react'),
    CategoryPicker = require('./category_picker');

var FiltersIndex = React.createClass({
  render: function() {
    var content;

    switch (this.props.filterStep) {
      case 1:
        content = <CategoryPicker/>;
        break;
    }

    return content;
  }
});


module.exports = FiltersIndex;
