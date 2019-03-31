import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Manufacmain from "./manufacmain.js";
import Consumer from "./consumer.js";
import AuthorizedManufac from "./AuthorizedManufac.js";
import Login from "./Login.js";
import { Button } from "react-bootstrap";
import TrackDet from "./TrackDet.js";
import Manufact from "./manufac.js";
import TrackConsumer from "./TrackConsumer.js";
import "./index.css";
class App extends Component {
  render() {
    return (
      <div>
        <div />
        <Router>
          <div>
           
           <Route exact path="/Home" component={Home} 
            <Route exact path="/Login" component={Login} />
            <Route exact path="/manufacmain" component={Manufacmain} />
            <Route exact path="/TrackDet" component={TrackDet} />
            <Route exact path="/manufac" component={Manufact} />
            <Route exact path="/TrackConsumer" component={TrackConsumer} />
            <Route
              exact
              path="/AuthorizedManufac"
              component={AuthorizedManufac}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
