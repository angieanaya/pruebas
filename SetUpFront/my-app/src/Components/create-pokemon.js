import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Swal from 'sweetalert2';
import { API_BASE_URL } from '../index'


export default class CreatePokemon extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
    }
  }

  onChangeExpenseName(e) {
    this.setState({name: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const pokemon = {
      name: this.state.name,
    };
    axios.post(API_BASE_URL + '/pokemons/', pokemon)
      .then(res => console.log(res.data));
    // console.log(`Expense successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);
    Swal.fire(
  'Good job!',
  'Pokemon Added Successfully',
  'success'
)

    this.setState({name: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.name} onChange={this.onChangeExpenseName}/>
             </Form.Group>
            
            </Col> 
           
        </Row>

       
        <Button variant="primary" size="lg" block="block" type="submit">
          Add Pokemon
        </Button>
      </Form>
      
    </div>);
  }
}