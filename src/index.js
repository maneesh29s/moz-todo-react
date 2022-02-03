import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// whole tutorial is on: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

ReactDOM.render(<App tasks={DATA} />, document.getElementById('root'));


