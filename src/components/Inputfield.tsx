import React, { useState } from "react";
import { Task } from "../App";


export interface Inputprops{
    input: Task,
    addTask: (task: Task)=> void;
}

const emptyTask : Task ={"title": "", "complete": false, "id": 0}

function InputField(props: Inputprops){
    // UseState für Eingabe
    const [eingabe, SetEingabe]=useState(props.input ?? emptyTask);
    // OnChange um eingabe zu verarbeiten
    const OnChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        //SetEingabe(event.target.value);
        const {name, value} = event.target;
        SetEingabe({...eingabe, [name]: value})

    }

    // OnClick um ein Event beim Mouse Klick zu triggern
    const Click = (e: React.MouseEvent<HTMLInputElement>)=>{
        // Eingabe in Konsole machen
        console.log(eingabe);
        // Feld Leeren
        SetEingabe(emptyTask);
    }

    return(
        <form>
            <label htmlFor="EingabeFeld">Task eingeben:  </label>
            {/*input Feld für Text. Eingabe als value und mit OnChange funktion */}
            <input type="text" id="task" name="title" placeholder="Add a Task" value={eingabe.title} onChange={OnChange}></input>
           <label htmlFor="Hinzufügen"></label>
            {/*input Feld für Submit. Mit OnClick funktion */}
            <input type="submit"value="Add" onClick={() =>props.addTask(eingabe)}></input>
        </form>
    )

}

export default InputField;