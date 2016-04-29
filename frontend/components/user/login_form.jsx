var React = require('react'),
    UserActions = require('../../actions/user_actions'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CurrentUserStateMixin = require('../../mixins/current_user_state');

var LoginForm = React.createClass({
  mixins: [CurrentUserStateMixin, LinkedStateMixin],

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
      }.bind(this), 150);
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
      }.bind(this), 150);
    } else {
      var dummyEvent = { preventDefault: function(){} };
      this.handleSubmit(dummyEvent);
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

      authErrorsUL = <ul>{authErrorLIs}</ul>;
    }

    toggleTypeText = this.state.formType === "Login" ?
      <p>Need an account? Sign up <a onClick={this.toggleType}>here</a></p> :
      <p>Already have an account? Login <a onClick={this.toggleType}>here</a></p>;

    return (
      <div className="credentials-modal">
        {authErrorsUL}

        <form onSubmit={this.handleSubmit}>
          <h2>{this.state.formType}</h2>

          <label>Username
            <input type="text"
                   value={this.state.username}
                   onChange={this.updateUsername}/>
          </label>

          <label>Password
            <input type="password"
                   value={this.state.password}
                   onChange={this.updateUsername}/>
          </label>

          <input type="submit" value={this.state.formType}/>
          {toggleTypeText}
        </form>

        <h5>Or</h5>

        <div>
          <form onSubmit={this.demoLogin}>
            <h2>Demo</h2>

            <input type="submit" value="Use Demo Account"/>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = LoginForm;
