import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todos = [
  {id: 1, name: 'todo1', isComplete: false},
  {id: 2, name: 'todo2', isComplete: false},
  {id: 3, name: 'todo3', isComplete: false},
];

const App = () =>
  (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          This is for redux-practice
        </p>
      </header>
      <div className='Todo-App'>
        <TodoForm />
        <TodoList todos={todos}/>
      </div>
    </div>
  );

export default App;
