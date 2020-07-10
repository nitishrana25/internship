import React from "react";
import {Row, Col} from "react-bootstrap";
import user from "./download.jpg"
import {FaPlusCircle} from "react-icons/fa";
const Profile=() => {
    return (
        <div className="profile">
          <Col>
      <h1>Student</h1>
      <h2>Search Student</h2>
      <Row>
        <Col className="searchstudent">
          <label>Name:</label>
          <select>
            <option>nitish</option>
            <option>mayank</option>
          </select>
        </Col>
        <Col className="searchstudent">
          <label>Course:</label>
          <select>
            <option>CSE</option>
            <option>ECE</option>
          </select>
        </Col>
        <Col className="searchstudent">
          <label>Department:</label>
          <select>
            <option>Science</option>
            <option>Art</option>
          </select>
        </Col>
        <Col className="laststudent">
          <label>Year:</label>
          <select>
            <option>2019</option>
            <option>2020</option>
          </select>
        </Col>
      </Row>
      <textarea rows="4" cols="130" placeholder="<list of student>"/>

      <h1>Profile</h1>
      <h3>Name of student</h3>
      <img src={user} alt="User" />
      <p>Department:</p>
      <p>Age:</p>
      <p>College ID:</p>
      <p>Session:</p>
      <p>DOB:</p>
      <p><FaPlusCircle />Add</p>
    </Col>
        </div>
    )
}
export default Profile;