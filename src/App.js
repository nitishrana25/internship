import React from 'react';
import Menu from "./component/menu";
import Profile from "./component/profile";
import Previous from "./component/previousSchooling";
import Performance from "./component/performance";
import Achievements from "./component/achievements";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Row>
      <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/previous" component={Previous} />
        <Route path="/performance" component={Performance} />
        <Route path="/achievements" component={Achievements} />
      </Switch>
    </BrowserRouter>
    </Row>
  );
}

export default App;
