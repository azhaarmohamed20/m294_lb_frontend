import React from "react";
import { text } from "stream/consumers";

export interface Inputprops{
    input: String;
}


const InputField: React.FC<Inputprops> = (input) =>{
return(
    <div>
        <input type="text" placeholder="Add a Task"></input>
        <input type="submit"value="Add"></input>
    </div>
)

}

export default InputField;