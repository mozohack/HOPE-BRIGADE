import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  Row
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  render() {
    return (
      <div
        className="app flex-row align-items-center"
        style={{
          padding: "40px 40px 40px 40px ",
          border: "1px black"
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <Card className="p-4">
                <Form>
                  <p>LOGIIN </p>

                  <InputGroup className="mb-3">
                    <input
                      type="text"
                      placeholder="UserID"
                      autoComplete="username"
                      onChange={event =>
                        this.setState({ name: event.target.value })}
                    />
                  </InputGroup>
 <InputGroup className="mb-3">
                    <input
                      type="text"
                      placeholder="UserID"
                      autoComplete="username"
                      onChange={event =>
                        this.setState({ ID: event.target.value })}
                    />
                  </InputGroup>

                  <Row>
                    <Col xs="6">
                      <Link to="/manufacmain">
                        <Button>Login</Button>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login;
