import axios from 'axios';
import { title } from 'process';
import React, { useEffect, useState } from 'react';
import HandleToDo from './components/TodoList';
import InputField from './components/Inputfield';
import TodoList from './components/TodoList';

export type Task = {
  id: number,
  title: String,
  complete: boolean;
}

function App() {
  const [inputs, SetInputs]=useState("");

  const[task, SetTasks] = useState<Task[]>([]);

    useEffect(() =>{
        loaddata();
    },[]);

    function loaddata (){
        axios.get<Task[]>("http://localhost:3001/tasks").then((response)=>{
            SetTasks(response.data);
        });
    }

    function deleteTask(tasktodelete: Task){
        axios.delete("http://localhost:3001/task/" + tasktodelete.id ).then (() =>{
            loaddata();
        })
    }



  return (
    <div className="App">
      <h1 id="title">Meine Todo Liste</h1>
      <InputField input={inputs}/>
      <TodoList tasks={task} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
