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
    return {
      modalIsOpen: false,
      formType: null
    };
  },

  handleLogout: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  openLogin: function(event) {
    event.preventDefault();

    this.setState({ formType: "Login" });
    this.openModal();
  },

  openSignUp: function(event) {
    event.preventDefault();

    this.setState({ formType: "Sign Up" });
    this.openModal();
  },

  openModal: function() {
    this.setState({ modalIsOpen: true });
  },

  closeModal: function() {
    this.setState({ modalIsOpen: false });
  },

  render: function() {
    var links;

    if (this.state.currentUser) {
      links = [
        <p key="user">Logged in as: {this.state.currentUser.username}</p>,
        <a key="myShows" href="#">My Shows</a>,
        <a key="logout" onClick={this.handleLogout}>Logout</a>,
      ];
    } else {
      links = [
        <a key="login" onClick={this.openLogin}>Login</a>,
        <a key="signUp" onClick={this.openSignUp}>Sign Up</a>
      ];
    }

    return (
      <nav className="user-nav">
        <Modal isOpen={this.state.modalIsOpen}
               onRequestClose={this.closeModal}>

          <LoginForm closeCallback={this.closeModal}
                     formType={this.state.formType}/>
        </Modal>

        {links}
      </nav>
    );
  }

});

module.exports = UserNav;
