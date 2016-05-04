var React = require('react'),
    Modal = require('react-modal'),
    moment = require('moment'),
    SpectacleActions = require('../../actions/spectacle_actions'),
    SpectacleModal = require('./spectacle_modal'),
    CartActions = require('../../actions/cart_actions');

var SpectaclesIndexItem = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false };
  },

  componentWillMount: function() {
    Modal.setAppElement("body");
  },

  openModal: function() {
    SpectacleActions.fetchSingleSpectacle(this.props.spectacle.id);
    this.setState({ modalIsOpen: true });
  },

  closeModal: function() {
    this.setState({ modalIsOpen: false });
    CartActions.resetCart();
  },

  render: function() {
    var spectacle = this.props.spectacle,
        startDate = moment(spectacle.first_performance).format("MMM D"),
        endDate = moment(spectacle.last_performance).format("MMM D");

    var dateRange = startDate + " - " + endDate;

    return (
      <div className="spectacle-thumbnail" onClick={this.openModal}>
        <Modal isOpen={this.state.modalIsOpen}
               onRequestClose={this.closeModal}
               className="modal"
               overlayClassName="modal-overlay">
          <SpectacleModal id={spectacle.id}/>
        </Modal>

        <img src={spectacle.image_url} alt={spectacle.title}/>

        <p className="category-name">
          {spectacle.category}
          <span className="date-range">{dateRange}</span>
        </p>

        <h4>{spectacle.title}</h4>

        <p className="thumbnail-description">{spectacle.description}</p>
      </div>
    );
  }
});

module.exports = SpectaclesIndexItem;
