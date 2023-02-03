import React, { useEffect, useState } from "react";
import { Task } from "../App";
import './style.css';
export interface Editprops{
    tasks: Task,
    editTask: (task: Task) => void;
}

const emptyTask : Task ={"title": "", "complete": false, "id": 0}

function EdittoDo(props: Editprops){
    const [edits, SetEdits]=useState(props.tasks ?? emptyTask);

    useEffect(() => SetEdits(props.tasks), [props]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        SetEdits({...edits, [name]:value})
    }

    function onFormSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        props.editTask(edits);
        
    }

    

    return(
        <form className="form" onSubmit={onFormSubmit} >
            <label htmlFor="Ändern" id="tasklbl">Task:{props.tasks.title} </label>
            <input type="text" name="title" value={edits.title} onChange={onChange} id="edit"required></input>
            <button id="savebutton">Save</button>
        </form>
    )
}
export default EdittoDo;