import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo(props) {
  var [title, setTitle] = useState('');

  function onChange(e) {
    setTitle(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.addTodo(title);
    setTitle('');
  }

  return (
    <form onSubmit={ onSubmit } style={{ display: 'flex' }}>
      <input type="text" name="title" style={{ flex: '10', padding: '5px' }} placeholder="Add Todo..." 
        value={ title } onChange={ onChange } />
      <input type="submit" name="Submit" className="btn" style={{ flex: '1' }} />
    </form>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;