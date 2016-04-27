var React = require('react'),
    UserActions = require('../../actions/user_actions'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CurrentUserStateMixin = require('../../mixins/current_user_state');

var LoginForm = React.createClass({
  mixins: [CurrentUserStateMixin, LinkedStateMixin],

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
      UserActions.login(credentials) :
      UserActions.create(credentials);

    this.setState(this.defaultUserState());
    this.props.closeCallback();
  },

  toggleType: function() {
    var newType = this.state.formType === "Login" ? "Sign Up" : "Login";

    this.setState({ formType: newType });
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
      <div>
        {authErrorsUL}

        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" valueLink={this.linkState("username")}/>
          </label>

          <label>Password
            <input type="password" valueLink={this.linkState("password")}/>
          </label>

          <input type="submit" value={this.state.formType}/>
        </form>

        {toggleTypeText}
      </div>
    );
  }
});

module.exports = LoginForm;
