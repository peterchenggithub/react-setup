import React from 'react';
import ReactDOM from 'react-dom';

export default function renderTitle() {
    ReactDOM.render(
        <h1>Hello, Peter!</h1>,
        document.getElementById('title')
      );
}
