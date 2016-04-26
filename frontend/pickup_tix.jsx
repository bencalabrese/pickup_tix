var React = require('react'),
    ReactDOM = require('react-dom');

var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Link = ReactRouter.Link,
    browserHistory = ReactRouter.browserHistory;

var Header = require('./components/header/header'),
    Footer = require('./components/footer/footer'),
    Splash = require('./components/splash/splash');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

var appRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash}/>
    </Route>
  </Router>
);

$(function() {
  ReactDOM.render(appRouter, document.getElementById('root'));
});
