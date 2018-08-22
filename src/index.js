import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './react/to-do/app.js'

const toDoList = [
    {name:'Sleep', status:'todo'},
    {name:'Lunch', status:'done'}
];

  ReactDOM.render(
    <ToDoApp list={toDoList} />,
    document.getElementById('to-do-app')
  );
