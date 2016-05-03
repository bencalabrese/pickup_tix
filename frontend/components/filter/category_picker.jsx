var React = require('react'),
    FilterStore = require('../../stores/filter'),
    FilterActions = require('../../actions/filter_actions'),
    SetFilterStep = require('../../mixins/set_filter_step'),
    CATEGORIES = require('../../constants/filter_name_maps').CATEGORIES;

var CategoryPicker = React.createClass({
  mixins: [SetFilterStep],

  getInitialState: function() {
    return { category_ids: FilterStore.all().category_ids };
  },

  componentDidMount: function() {
    this.listener = FilterStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ category_ids: FilterStore.all().category_ids });
  },

  inStore: function(categoryId) {
    return this.state.category_ids.indexOf(categoryId) !== -1;
  },

  toggleCategory: function(event) {
    var id = parseInt(event.currentTarget.getAttribute("data-id"));
    var category_ids = this.state.category_ids;
    var updatedCategories;

    if (this.inStore(id)) {
      var idIndex = category_ids.indexOf(id);
      category_ids.splice(idIndex, 1);
    } else {
      category_ids.push(id);
    }

    FilterActions.setFilter({ category_ids: category_ids });
  },

  render: function() {
    var categoryLIs = CATEGORIES.map(function(c) {
      var className = this.inStore(c.id) ? "selected" : "unselected";

      return (
        <li data-id={c.id}
            onClick={this.toggleCategory}
            key={c.id}>
          <a className={className}>{c.name}</a>
        </li>
      );
    }.bind(this));

    return (
      <div>
        <h3>Select Categories</h3>
        <ul className="filter-options">
          {categoryLIs}
        </ul>

        <p className="next-filter-link"
           onClick={this.goToDates}>
           Pick dates >>
        </p>
      </div>
    );
  }
});

module.exports = CategoryPicker;
