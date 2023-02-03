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
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    useEffect(() => SetEdits(props.tasks), [props]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        SetEdits({...edits, [name]:value})
        setValue(event.target.value);
        if (!/^(?!\s).*\S(?!\s)$/.test(event.target.value)) {
          setError('The first and last characters cannot be whitespaces.');
        } else {
          setError('');
        }
    }

    function onFormSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        props.editTask(edits);
        
    }

    

    return(
        <form className="form" onSubmit={onFormSubmit} >
            <label htmlFor="Ändern" id="tasklbl">Task:{props.tasks.title} </label>
            <input type="text" name="title" value={edits.title} onChange={onChange} id="edit"required pattern="^(?!\s).*\S(?!\s)$"></input>{error && <p style={{ color: 'red' }}>{error}</p>}
            <button id="savebutton">Save</button>
        </form>
    )
}
export default EdittoDo;