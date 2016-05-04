var React = require('react'),
    ReactDOM = require('react-dom');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

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
    var key = this.props.children.type.displayName;

    return (
      <div className="app">
        <Header/>

        <ReactCSSTransitionGroup
          transitionName="carousel"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}>

          <div key={key} className="content">
            {this.props.children}
          </div>

        </ReactCSSTransitionGroup>
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

window.UserStore = require('./stores/user');
