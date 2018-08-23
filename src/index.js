import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './react/to-do/app.js';
import { hot } from 'react-hot-loader';
import printMe from './print.js'

const toDoList = [
    {name:'Sleep', status:'todo'},
    {name:'Lunch', status:'done'}
];

  ReactDOM.render(
    <ToDoApp list={toDoList} />,
    document.getElementById('to-do-app')
  );


  if(module.hot){
    console.log('it is hot.')
    
    module.hot.accept('./print.js', function() {
       console.log('Accepting the updated printMe module!');
      printMe();
      })
  }

  export default hot(module)(ToDoApp)
  