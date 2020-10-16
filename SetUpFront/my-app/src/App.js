import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreatePokemon from "./Components/create-pokemon";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="success" variant="success">
          <Container>
            <Nav className="justify-content-end">
              <Nav>
                <Link to='/create-pokemon'>
                                        <Button color="info" size="sm" id="verDetalle">Pokemon</Button>
                  </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreatePokemon} />
                <Route path="/create-pokemon" component={CreatePokemon} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
