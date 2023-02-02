import React from "react";
import { Task } from "../App";

export interface HandleProps{
    tasks: Task[];
    deleteTask: (task:Task) => void;
}

function HandleToDo(props: HandleProps){
    return(
        <div>
            {props.tasks.map((todo:Task)=>(
                <li key={todo.id}>{todo.title}<button onClick={()=> props.deleteTask(todo)}>delete</button></li>
            ))}
        </div>
    )
}

export default HandleToDo;