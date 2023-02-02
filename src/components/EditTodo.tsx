import React, { useEffect, useState } from "react";
import { Task } from "../App";

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
        <form onSubmit={onFormSubmit}>
            <label htmlFor="Ändern">Title: </label>{props.tasks.title}
            <br></br>
            <input type="text" name="title" value={edits.title} onChange={onChange} required></input>
            <button>Save</button>
        </form>
    )
}
export default EdittoDo;