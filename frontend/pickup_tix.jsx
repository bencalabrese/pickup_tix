var React = require('react'),
    ReactDOM = require('react-dom');

var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    browserHistory = ReactRouter.browserHistory;

var Header = require('./components/header/header'),
    Footer = require('./components/footer/footer'),
    Splash = require('./components/splash/splash'),
    FilterPage = require('./components/filter/filter_page');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Header/>
        <div className="content">{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
});

var appRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash}/>
      <Route path="/events" component={FilterPage}/>
    </Route>
  </Router>
);

$(function() {
  ReactDOM.render(appRouter, document.getElementById('root'));
});


window.CartActions = require('./actions/cart_actions');
window.CartStore = require('./stores/cart');
