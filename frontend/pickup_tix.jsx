var React = require('react'),
    ReactDOM = require('react-dom');

var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Link = ReactRouter.Link,
    browserHistory = ReactRouter.browserHistory;

var LoginForm = require('./components/user/login_form');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="test">Go to test page</Link>
        {this.props.children}
      </div>
    );
  }
});

var React = require('react');
var PropTypes = React.PropTypes;

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Hello World</div>
    );
  }
});

var appRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LoginForm}/>
      <Route path="test" component={HelloWorld}/>
    </Route>
  </Router>
);

$(function() {
  ReactDOM.render(appRouter, document.getElementById('content'));
});
