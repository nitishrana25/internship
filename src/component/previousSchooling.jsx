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
        <Row>
          <label><h3>Senior Secondary School</h3></label>
        </Row>
        <Row>
        <input type="text" placeholder="Name of School" />
          <input type="number" placeholder="Overall %" />
        </Row>
        <Row>
          <label><h3>Under Graduation</h3></label>
        </Row>
        <Row>
        <input type="text" placeholder="Name of the College" />
          <input type="number" placeholder="Aggr. Marks" />
          <p>or</p>
          <input type="number" placeholder="Current Marks" />
        </Row>
        <Row>
          <label><h3>Any Other Experience</h3></label>
        </Row>
        <Row>
          <input type="text" placeholder="+"/>
          <input type="text" placeholder="Marks" />
        </Row>
      </form>
    </Col>
        </div>
    )
}

export default Previous;