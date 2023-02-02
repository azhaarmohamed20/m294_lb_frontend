import axios from 'axios';
import { title } from 'process';
import React, { useEffect, useState } from 'react';
import HandleToDo from './components/TodoList';
import InputField from './components/Inputfield';
import TodoList from './components/TodoList';

export type Task = {
  id: number,
  title: string,
  complete: boolean;
}
const emptyTask: Task = {"title":"", "complete": false, "id": 0}; 

function App() {
  const [tasktoEdit, SetTasktoEdit]=useState<Task>(emptyTask)
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

    function postTask(tasktoPost: Task){
        axios.post<Task>("http://localhost:3001/tasks", tasktoPost).then(() =>{
          loaddata();
        })
        
    }


  return (
    <div className="App">
      <h1 id="title">Meine Todo Liste</h1>
      <InputField input={tasktoEdit} addTask={postTask}/>
      <TodoList tasks={task} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
