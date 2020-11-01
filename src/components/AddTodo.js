import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, FormControl, Col, Container, InputGroup } from 'react-bootstrap';
import { render } from '@testing-library/react';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: 
  e.target.value });

// From Bootstrap website:

//   render() {
//     return (
//       <Form onSubmit={this.onSubmit}>
//         <InputGroup>
//         <FormControl size="lg"
//           type="text"
//           name="title"
//           placeholder="What will you do today?"
//           value={this.state.title}
//           onChange={this.onChange}
//           aria-label="User's to do item"
//           aria-describedby="basic-addon2"
//         />
//         <InputGroup.Append>
//           <Button type="submit" value="Submit" variant="outline-secondary">Submit</Button>
//         </InputGroup.Append>
//       </InputGroup>
//     </Form>
//     )
//   }
// }


  //Original:

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input id="addTodo"
        type="text"
        name="title"
        style={{ flex: '10', padding: '5px' }}
        placeholder="Add Todo..."
        value={this.state.title}
        onChange={this.onChange}
      />
      <button id="button" type="submit" value="Submit">Add</button>
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
