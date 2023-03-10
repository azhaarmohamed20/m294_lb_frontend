import React, { useState } from "react";
import { Task } from "../App";
import './style.css';

export interface Inputprops{
    input: Task,
    addTask: (task: Task)=> void;
}

const emptyTask : Task ={"title": "", "complete": false, "id": 0}

function InputField(props: Inputprops){
    // UseState für Eingabe
    const [eingabe, SetEingabe]=useState(props.input ?? emptyTask);
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    // OnChange um eingabe zu verarbeiten
    const OnChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        SetEingabe({...eingabe, [name]: value})
        setValue(event.target.value);
        if (!/^(?!\s).*\S(?!\s)$/.test(event.target.value)) {
          setError('The first and last characters cannot be whitespaces.');
        } else {
          setError('');
        }
    }

    // OnClick um ein Event beim Mouse Klick zu triggern
    const Click = (e: React.MouseEvent<HTMLInputElement>)=>{
        // Eingabe in Konsole machen
        console.log(eingabe);
        // Feld Leeren
        SetEingabe(emptyTask);
    }

    return(
        <form className="form">
            <label htmlFor="EingabeFeld" id="eingabelbl">Task eingeben:</label>
            {/*input Feld für Text. Eingabe als value und mit OnChange funktion */}
            <input type="text" id="task" name="title" placeholder="Add a Task" value={eingabe.title} onChange={OnChange} required minLength={4} pattern="^(?!\s).*\S(?!\s)$"></input>{error && <p style={{ color: 'red' }}>{error}</p>}

           <label htmlFor="Hinzufügen"></label>
            {/*input Feld für Submit. Mit OnClick funktion */}

            <input type="submit"value="Add" onClick={() =>props.addTask(eingabe)} id="eingabe"></input>
        </form>
    )

}

export default InputField;