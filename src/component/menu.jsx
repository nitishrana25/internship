import React from "react";
import "./index.css"
import {NavLink} from "react-router-dom";
import {Col} from "react-bootstrap";
import {FaPlusCircle} from "react-icons/fa";

const Menu=() => {
    return (
        <div className="Menu">
          <Col>
          <div class="vl"></div>
          <ul>
          <li>
            <NavLink to="/" activeStyle={{fontWeight: "bold",color: "orange"}}>
              <h2>Profile</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/previous" activeStyle={{fontWeight: "bold",color: "orange"}}><h2>Previous&nbsp;Schooling</h2></NavLink>
          </li>
          <li>
            <NavLink to="/achievements" activeStyle={{fontWeight: "bold",color: "orange"}}>
              <h2>Achievements</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/performance" activeStyle={{fontWeight: "bold",color: "orange"}}>
              <h2>Performance</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeStyle={{fontWeight: "bold",color: "orange"}}>
              <h2><FaPlusCircle />Add</h2>
            </NavLink>
          </li>
        </ul>
          </Col>
        </div>
    )
}
export default Menu;