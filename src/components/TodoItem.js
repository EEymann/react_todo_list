import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';




export class TodoItem extends Component {
  getStyle = () => {
    return {
      // padding: '10px',
      // borderBottom: '1px #ccc dotted',
      paddingBottom: '15px',
      paddingTop: '15px',
      textDecoration: this.props.todo.completed ? 
      'line-through' : 'none',
      
    }
  }


// Version 1 With bootstrap:

//   render() {
//     const { id, title } = this.props.todo;
//     return (
//       <Container style={this.getStyle()}>
//         <input type="checkbox" className="custom-checkbox" onChange={this.props.toggleComplete.bind
//         (this, id)} /> {' '}
//         { title }
//         <button onClick={this.props.delTodo.bind(this, id)} style=
//         {btnStyle}>x</button>
//       </Container>
//     )
//   }
// }



render() {
  const { id, title } = this.props.todo;
  return (
    <div className="clearfix" style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.toggleComplete.bind
        (this, id)} /> {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style=
        {btnStyle}>x</button> 
    </div>
    
  )
}
}







// Original:

//   render() {
//     const { id, title } = this.props.todo;
//     return (
//       <div style={this.getStyle()}>
        
//         <button onClick={this.props.delTodo.bind(this, id)} style=
//           {btnStyle}>X</button>
        
//           <input type="checkbox" onChange={this.props.toggleComplete.bind
//           (this, id)} /> {' '}
//           { title }
          
//       </div>
      
//     )
//   }
// }

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  // background: '#ff0000',
  color: 'red',
  width: '5px',
  height: '5px',
  border: 'none',
  // padding: '5px 9px',
  // borderRadius: '50%',
  cursor: 'pointer',
  float: 'left',
  margin: '0 25px 0',
  fontWeight: 'bold',
  
  
}

export default TodoItem;