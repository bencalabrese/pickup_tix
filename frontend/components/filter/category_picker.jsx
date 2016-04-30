var React = require('react'),
    FilterStore = require('../../stores/filter'),
    FilterActions = require('../../actions/filter_actions');

var CATEGORIES = [
  { id: 1, name: "Dance"   },
  { id: 2, name: "Music"   },
  { id: 3, name: "Theater" }
];

var CategoryPicker = React.createClass({
  getInitialState: function() {
    return { selectedCategories: FilterStore.all().category_ids };
  },

  componentDidMount: function() {
    this.listener = FilterStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ selectedCategories: FilterStore.all().category_ids });
  },

  inStore: function(categoryId) {
    return this.state.selectedCategories.indexOf(categoryId) !== -1;
  },

  toggleCategory: function(event) {
    var id = parseInt(event.currentTarget.getAttribute("data-id"));
    var selectedCategories = this.state.selectedCategories;
    var updatedCategories;

    if (this.inStore(id)) {
      var idIndex = selectedCategories.indexOf(id);
      selectedCategories.splice(idIndex, 1);
    } else {
      selectedCategories.push(id);
    }

    FilterActions.setFilter({ category_ids: selectedCategories });
  },

  render: function() {
    var categoryLIs = CATEGORIES.map(function(c) {
      var className = this.inStore(c.id) ? "selected" : "unselected";

      return (
        <li data-id={c.id}
            onClick={this.toggleCategory}
            className={className}
            key={c.id}>
          {c.name}
        </li>
      );
    }.bind(this));

    return (
      <div>
        <h3>Select Categories</h3>
        <form>
          {categoryLIs}
        </form>

        <button>Pick dates >></button>
      </div>
    );
  }
});

module.exports = CategoryPicker;
