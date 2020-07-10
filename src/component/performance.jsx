import React from "react";
import {Col} from "react-bootstrap";
import "./index.css";

const Performance= () => {
    return (
        <div className="performance">
          <Col>
      <h1>Student</h1>
      <h2>Performance</h2>
      <div>
        <label className="label"><h3>Club Joined</h3></label>
        <input type="text" placeholder="+" />
      </div>
      <div>
        <label className="label"><h3>Ratings:</h3></label>
        <div>
          <label className="label"><h3>Teacher 1:<span>⭐⭐⭐⭐</span></h3></label>
        </div>
        <div>
          <label className="label"><h3>Teacher 2:<span>⭐⭐</span></h3></label>
        </div>
        <div>
          <label className="label"><h3>Teacher 3:<span>⭐⭐⭐</span></h3></label>
        </div>
      </div>
    </Col>
        </div>
    )
}

export default Performance;