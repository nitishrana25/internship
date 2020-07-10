import React from "react";
import {Col} from "react-bootstrap";
import "./index.css"

const Achievements= () => {
    return (
        <div className="achievements">
          <Col>
      <h1>Student</h1>
      <h2>Achievements</h2>

      <form action="">
        <div class="form-group">
          <label><h3>Senior Secondary</h3></label>
          <div>
            <textarea
              name=""
              id=""
              cols="130"
              rows="5"
              placeholder="<list of achievements>"
            />
          </div>
        </div>
        <div class="form-group">
          <label><h3>Under Graduation</h3></label>
          <div>
            <textarea
              name=""
              id=""
              cols="130"
              rows="5"
              placeholder="<list of achievements>"
            />
          </div>
        </div>
        <div class="form-group">
          <label><h3>Any Other</h3></label>
          <div>
            <textarea
              name=""
              id=""
              cols="130"
              rows="5"
              placeholder="<list of achievements>"
            />
          </div>
        </div>
      </form>
    </Col>
        </div>
    )
}

export default Achievements;