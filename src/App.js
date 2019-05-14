import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./Header"
import Header from './Header';
import ToDoList from "./ToDos/ToDoList"

function App() {
  return (
    <div>
      <Header/>
        <div className="App">
          <ToDoList/>
        </div>
    </div>
    
  );
}

export default App;
