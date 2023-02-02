import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputField from './components/Inputfield';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';

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

    function editTask (tasktoEdit: Task){
        axios.put<Task>("http://localhost:3001/tasks",tasktoEdit).then(() =>{
          loaddata();
          SetTasktoEdit(emptyTask);
        })
    }


    function changeTask(task: Task){
        SetTasktoEdit(task);
    }

  return (
    <div className="App">
      <h1 id="title">Meine Todo Liste</h1>
      <InputField input={tasktoEdit} addTask={postTask}/>
      <TodoList tasks={task} deleteTask={deleteTask} editTask={changeTask}/>
      <EditTodo tasks={tasktoEdit} editTask={editTask}/>
    </div>
  );
}

export default App;
