var React = require('react'),
    ReactDOM = require('react-dom');

var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var LoginForm = require('./components/user/login_form');

var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LoginForm}/>
    </Route>
  </Router>
);

$(function() {
  ReactDOM.render(appRouter, document.getElementById('content'));
});
