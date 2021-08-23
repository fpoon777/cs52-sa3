import React from 'react';
// import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
// import Counter from './counter';
// import Controls from './controls';
import YouTube from './youtube';

const About = (props) => {
  return <div> All there is to know about me </div>;
};
// eslint-disable-next-line no-unused-vars
const Welcome = (props) => {
  return (
    <div>
      Welcome
    </div>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/youtube" exact>YouTube</NavLink></li>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route exact path="/youtube" component={YouTube} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
