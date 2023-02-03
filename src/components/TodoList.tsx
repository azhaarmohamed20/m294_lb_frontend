import React from "react";
import { Task } from "../App";
import './style.css';
export interface HandleProps{
    tasks: Task[];
    deleteTask: (task:Task) => void;
    editTask: (task: Task) => void;
}

function TodoList(props: HandleProps){
    return(
        <form className="form">
        <div id="lielement">
            {props.tasks.map((todo:Task)=>(
            <li key={todo.id} >{todo.title}<button onClick={()=> props.deleteTask(todo)} className="libutton">delete</button><button onClick={() => props.editTask(todo)} className="libutton">Edit</button></li>
            ))}
        </div></form>
    )
}

export default TodoList;