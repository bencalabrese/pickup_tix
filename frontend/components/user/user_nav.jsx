var React = require('react'),
    Link = require('react-router').Link,
    Modal = require('react-modal'),
    CurrenUserStateMixin = require('../../mixins/current_user_state'),
    UserActions = require('../../actions/user_actions'),
    LoginForm = require('./login_form');

var UserNav = React.createClass({
  mixins: [CurrenUserStateMixin],

  componentWillMount: function() {
    Modal.setAppElement("body");
  },

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  handleLogout: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  openModal: function(event) {
    event.preventDefault();
    this.setState({ modalIsOpen: true });
  },

  closeModal: function() {
    this.setState({ modalIsOpen: false });
  },

  render: function() {
    var links;

    if (this.state.currentUser) {
      links = [
        <button key="myShows" href="#">My Shows</button>,
        <button key="logout" onClick={this.handleLogout}>Logout</button>
      ];
    } else {
      links = [
        <button key="login" onClick={this.openModal}>Login</button>,
        <button key="signUp" onClick={this.openModal}>Sign Up</button>
      ];
    }

    return (
      <nav className="user-nav">
        {links}

        <Modal isOpen={this.state.modalIsOpen}
               onRequestClose={this.closeModal}>

          <LoginForm/>
        </Modal>
      </nav>
    );
  }

});

module.exports = UserNav;
