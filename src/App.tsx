import React, { useState } from 'react';
import HandleToDo from './components/HandleToDo';
import InputField from './components/Inputfield';

function App() {
  const [inputs, SetInputs]=useState("");

  return (
    <div className="App">
      <h1 id="title">Meine Todo Liste</h1>
      <InputField input={inputs}/>
      <HandleToDo inputValue={inputs}/>
    </div>
  );
}

export default App;
