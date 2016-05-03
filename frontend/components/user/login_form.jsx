var React = require('react'),
    UserActions = require('../../actions/user_actions'),
    CurrentUserStateMixin = require('../../mixins/current_user_state');

var LoginForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  DEMO_USERNAME: ["G", "u", "e", "s", "t"],

  DEMO_PASSWORD: ["p", "a", "s", "s", "w", "o", "r", "d"],

  getInitialState: function() {
    return {
      username: "",
      password: "",
      formType: this.props.formType
    };
  },

  defaultUserState: function() {
    return {
      username: "",
      password: "",
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var credentials = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };

    this.state.formType === "Login" ?
      UserActions.login(credentials, this.props.closeCallback) :
      UserActions.create(credentials, this.props.closeCallback);

    this.setState(this.defaultUserState());
  },

  toggleType: function() {
    var newType = this.state.formType === "Login" ? "Sign Up" : "Login";

    this.setState({ formType: newType });
  },

  demoLogin: function(event) {
    event.preventDefault();

    this.setState({
      username: "",
      password: "",
      formType: "Login"
    });

    var _username = this.DEMO_USERNAME.slice();
    this.fillDemoUsername(_username);
  },

  fillDemoUsername: function(_username) {
    if (_username.length > 0) {
      setTimeout(function() {
        this.setState({
          username: this.state.username + _username.shift()
        });

        this.fillDemoUsername(_username);
      }.bind(this), 100);
    } else {
      var _password = this.DEMO_PASSWORD.slice();
      this.fillDemoPassword(_password);
    }
  },

  fillDemoPassword: function(_password) {
    if (_password.length > 0) {
      setTimeout(function() {
        this.setState({
          password: this.state.password + _password.shift()
        });

        this.fillDemoPassword(_password);
      }.bind(this), 100);
    } else {
      var dummyEvent = { preventDefault: function(){} };
      setTimeout(this.handleSubmit.bind(this, dummyEvent), 200);
    }
  },

  changeUsername: function(event) {
    this.setState({ username: event.target.value});
  },

  changePassword: function(event) {
    this.setState({ password: event.target.value});
  },

  render: function() {
    var authErrorsUL, toggleTypeText;

    if (this.state.authErrors.length > 0) {
      var authErrorLIs = this.state.authErrors.map(function(error) {
        return <li key={error}>{error}</li>;
      });

      authErrorsUL = <ul className="errors">{authErrorLIs}</ul>;
    }

    toggleTypeText = this.state.formType === "Login" ?
      <a onClick={this.toggleType}>Need an account? Sign up here</a> :
      <a onClick={this.toggleType}>Have an account? Login here</a>;

    return (
      <div className="credentials-modal">
        {authErrorsUL}
        <div className="login-form">
          <h2>{this.state.formType}</h2>
          <form onSubmit={this.handleSubmit}>

            <input type="text"
                   placeholder="Username"
                   className="login-input"
                   value={this.state.username}
                   onChange={this.changeUsername}/>

            <input type="password"
                   placeholder="Password"
                   className="login-input"
                   value={this.state.password}
                   onChange={this.changePassword}/>

            <input
              type="submit"
              value={this.state.formType}
              className="login-input"/>
            {toggleTypeText}
          </form>
        </div>

        <h5>Or</h5>

        <div className="login-form">
          <h2>Demo</h2>
          <form onSubmit={this.demoLogin}>

            <input
              type="submit"
              value="Use Demo Account"
              className="login-input"/>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = LoginForm;
