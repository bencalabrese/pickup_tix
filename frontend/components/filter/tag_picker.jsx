var React = require('react'),
    FilterStore = require('../../stores/filter'),
    FilterActions = require('../../actions/filter_actions'),
    SetFilterStep = require('../../mixins/set_filter_step'),
    TAGS = require('../../constants/filter_name_maps').TAGS;

var TagPicker = React.createClass({
  mixins: [SetFilterStep],

  getInitialState: function() {
    return { tag_ids: FilterStore.all().tag_ids };
  },

  componentDidMount: function() {
    this.listener = FilterStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ tag_ids: FilterStore.all().tag_ids });
  },

  inStore: function(tag_id) {
    return this.state.tag_ids.indexOf(tag_id) !== -1;
  },

  toggleCategory: function(event) {
    var id = parseInt(event.currentTarget.getAttribute("data-id"));
    var tag_ids = this.state.tag_ids;
    var updatedCategories;

    if (this.inStore(id)) {
      var idIndex = tag_ids.indexOf(id);
      tag_ids.splice(idIndex, 1);
    } else {
      tag_ids.push(id);
    }

    FilterActions.setFilter({ tag_ids: tag_ids });
  },

  render: function() {
    var tagLIs = TAGS.map(function(tag) {
      var className = this.inStore(tag.id) ? "selected" : "unselected";

      return (
        <li data-id={tag.id}
            onClick={this.toggleCategory}
            key={tag.id}>
          <a className={className}>{tag.name}</a>
        </li>
      );
    }.bind(this));

    return (
      <div>
        <h3>Select Tags</h3>
        <ul className="filter-options">
          {tagLIs}
        </ul>
      </div>
    );
  }
});

module.exports = TagPicker;
