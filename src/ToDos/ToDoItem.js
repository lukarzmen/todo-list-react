import React from "react"
import "./ToDoItem.css"
import "./checkboxes"
function ToDoItem(props){
    return (
        <div style={{display: !props.text && "none"}} className="todo-item">
            <input type="checkbox" />
            <p>{props.text}</p>
        </div>
    )
}

export default ToDoItem
