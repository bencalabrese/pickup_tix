var React = require('react'),
    UserActions = require('../../actions/user_actions'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CurrentUserStateMixin = require('../../mixins/current_user_state');

var LoginForm = React.createClass({
  mixins: [CurrentUserStateMixin, LinkedStateMixin],

  getInitialState: function() {
    return this.defaultUserState();
  },

  defaultUserState: function() {
    return {
      username: "",
      password: ""
    };
  },

  handleLogout: function(event) {
    event.preventDefault();
    UserActions.logout();
  },

  handleDeleteAccount: function(event) {
    event.preventDefault();
    UserActions.destroy();
  },

  handleLogin: function(event) {
    event.preventDefault();
    UserActions.login({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    });

    this.setState(this.defaultUserState());
  },

  handleSignUp: function(event) {
    event.preventDefault();
    UserActions.create({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    });

    this.setState(this.defaultUserState());
  },

  render: function() {
    var content,
        authErrorsUL;

    if (this.state.currentUser) {
      content = (
        <div>
          <button onClick={this.handleLogout}>Logout</button>
          <button onClick={this.handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      );
    } else {
      content = (
        <form>
          <label>Username
            <input type="text" valueLink={this.linkState("username")}/>
          </label>

          <label>Password
            <input type="password" valueLink={this.linkState("password")}/>
          </label>

          <input type="submit"
                 value="Login"
                 onClick={this.handleLogin}/>

          <input type="submit"
                 value="Sign Up"
                 onClick={this.handleSignUp}/>
        </form>
      );
    }

    if (this.state.authErrors.length > 0) {
      var authErrorLIs = this.state.authErrors.map(function(error) {
        return <li key={error}>{error}</li>;
      });

      authErrorsUL = <ul>{authErrorLIs}</ul>;
    }

    return (
      <div>
        {authErrorsUL}
        {content}
      </div>
    );
  }
});

module.exports = LoginForm;
