import React, { useState } from 'react';
import HandleToDo from './components/HandleToDo';
import InputField from './components/Inputfield';

function App() {
  const [inputs, SetInputs]=useState("");

  return (
    <div className="App">
      <InputField input={inputs}/>
      <HandleToDo inputValue={inputs}/>
    </div>
  );
}

export default App;
