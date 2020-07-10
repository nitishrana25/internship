import React from "react";
import {Row, Col} from "react-bootstrap";
import "./index.css"

const Previous=() => {
    return (
        <div>
          <Col className="previous">
      <h1>Student</h1>
      <h2>Previous Schooling</h2>
      <form action="">
        <Row className="row1">
          <label><h3>Senior Secondary School</h3></label>
          <input type="text" placeholder="Name of School" />
          <input type="number" placeholder="Overall %" />
        </Row>
        <Row className="row2">
          <label><h3>Under Graduation</h3></label>
          <input type="text" placeholder="Name of the College" />
          <input type="number" placeholder="Aggr. Marks" />
        </Row>
        <div className="row3">or</div>
        <div className="row4">
          <input type="number" placeholder="Current Marks" />
        </div>
        <Row className="row5">
          <label><h3>Any Other Experience</h3></label>
        </Row>
        <Row className="row6">
          <input type="text" placeholder="+"/>
          <input type="text" placeholder="Marks" />
        </Row>
      </form>
    </Col>
        </div>
    )
}

export default Previous;