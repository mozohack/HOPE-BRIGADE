import React, { Component } from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
class Track extends Component {

  constructor(props) {
    super(props);
    this.proceed = this.proceed.bind(this);
    this.state = {
      medicineid: "",AuthorizedManufacturer:"true"
    };
  }
  proceed() {
    return(){
<div>{this.state.AuthorizedManufaccture}</div>
}
  }

  render() {
    return (
      <div>
        <div>
          <center>TRACK DETAILS</center>
        </div>
        <Card>
          <center>
            <Form className="form-vertical">
              <Col>
                <FormGroup>
                  <FormLabel className="control-label col-sm-2" value="123">
                    MEDICINE ID
                  </FormLabel>
                  <input
                    type="text"
                    name="medicineid"
                    onChange={event =>
                      this.setState({ medicineid: event.target.value })}
                  />{" "}
                </FormGroup>

                <Nav.Link href="/AuthorizedManufac">
                  {" "}
                  <Button onClick={this.proceed}>PROCEED</Button>{" "}
                </Nav.Link>
              </Col>
            </Form>
          </center>
        </Card>
      </div>
    );
  }
}
export default Track;
