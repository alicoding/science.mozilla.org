import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

// Components

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

// Pages

import Blog from "./pages/blog.jsx";
import Home from "./pages/home/home.jsx";
import Members from "./pages/members.jsx";
import Programs from "./pages/programs.jsx";
import Projects from "./pages/projects.jsx";
import Resources from "./pages/resources.jsx";
import StyleGuide from "./pages/style-guide.jsx";
import Events from "./pages/events.jsx";

const App = React.createClass({
  render() {
    return (
      <div>
        <Header path={this.props.location.pathname}/>
        <div id="content-wrapper">
          <div id="content" className="container">
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="blog" component={Blog}/>
      <Route path="members" component={Members}/>
      <Route path="programs" component={Programs}>
        <Route path="events" component={Events} />
      </Route>
      <Route path="projects" component={Projects}/>
      <Route path="resources" component={Resources}/>
      <Route path="style-guide" component={StyleGuide}/>
    </Route>
  </Router>
), document.querySelector(`#app`));
