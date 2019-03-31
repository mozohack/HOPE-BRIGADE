import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>KNOW YOUR DRUG</h1>
        </div>
        <div id="main">
          <center>
            <Link to="/Login">
              <Button
                style={{ margin: "120px 100px 120px 0px" }}
                variant="dark"
                size="lg"
                block
              >
                Are You a part of supply chain?
              </Button>
            </Link>
          </center>
        </div>
        <div id="main">
          <center>
            <Link to="/Trackdet">
              <Button
                style={{
                  margin: "120px 100px 120px 0px"
                }}
                variant="dark"
                size="lg"
                block
              >
                Are You a Consumer?
              </Button>
            </Link>
          </center>
        </div>
      </div>
      <div></div>
    );
  }
}
export default Home;
