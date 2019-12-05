import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  function getDivStyle() {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: props.todo.completed ? 'line-through' : 'none'
    }
  }

  const { id, title } = props.todo;

  return (
    <div style={ getDivStyle() }>
      <p>
        <input type="checkbox" defaultChecked={ props.todo.completed } onChange={ props.markComplete.bind(this, id) }></input> { ' ' }
        { title }
        <button onClick={ props.delTodo.bind(this, id) } style={ btnStyle }>x</button>
      </p>
    </div>
  );
}

const btnStyle = {
  backgroundColor: '#f00',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem;