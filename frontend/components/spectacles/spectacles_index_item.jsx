var React = require('react'),
    Modal = require('react-modal'),
    SpectacleModal = require('./spectacle_modal');

var SpectaclesIndexItem = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false };
  },

  componentWillMount: function() {
    Modal.setAppElement("body");
  },

  openModal: function() {
    this.setState({ modalIsOpen: true });
  },

  closeModal: function() {
    this.setState({ modalIsOpen: false });
  },

  render: function() {
    var spectacle = this.props.spectacle;

    return (
      <div className="spectacle-thumbnail" onClick={this.openModal}>
        <Modal isOpen={this.state.modalIsOpen}
               onRequestClose={this.closeModal}
               className="modal"
               overlayClassName="modal-overlay">
          <SpectacleModal spectacle={spectacle}/>
        </Modal>

        <img src={spectacle.image_url} alt={spectacle.title}/>

        <p className="venue-name">
          {spectacle.venue_name}
          <span className="date-range">Apr 22 - May 8</span>
        </p>

        <h4>{spectacle.title}</h4>

        <p className="thumbnail-description">{spectacle.description}</p>
      </div>
    );
  }
});

module.exports = SpectaclesIndexItem;
