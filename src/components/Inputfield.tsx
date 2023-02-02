import React, { useState } from "react";


export interface Inputprops{
    input: String,
}


function InputField(props: Inputprops){
    // UseState für Eingabe
    const [eingabe, SetEingabe]=useState("");
    // OnChange um eingabe zu verarbeiten
    const OnChange = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
        SetEingabe(event.target.value);
    }

    // OnClick um ein Event beim Mouse Klick zu triggern
    const Click = (e: React.MouseEvent<HTMLInputElement>)=>{
        // Eingabe in Konsole machen
        console.log(eingabe);
        // Feld Leeren
        SetEingabe("");
    }

    return(
        <form>
            <label htmlFor="EingabeFeld">Task eingeben:  
            {/*input Feld für Text. Eingabe als value und mit OnChange funktion */}
            <input type="text" id="task" placeholder="Add a Task"value={eingabe} onChange={OnChange}></input></label>
           <label htmlFor="Hinzufügen">
            {/*input Feld für Submit. Mit OnClick funktion */}
            <input type="submit"value="Add" onClick={Click}></input></label>
        </form>
    )

}

export default InputField;