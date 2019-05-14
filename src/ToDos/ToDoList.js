import React from "react"
import "./ToDoList.css"
import ToDoItem from "./ToDoItem"
import todosList from "./checkboxes"

function ToDoList(){
  const todos = todosList.map(checkbox => {
    return(
      <ToDoItem text={checkbox.text}/>
    )
  })
  return(
    <div className="todo-list">
      {todos}
    </div>
  )
}

export default ToDoList