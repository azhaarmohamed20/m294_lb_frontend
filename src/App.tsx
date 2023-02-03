import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputField from './components/Inputfield';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import './components/style.css';
export type Task = {
  id: number,
  title: string,
  complete: boolean;
}
const emptyTask: Task = {"title":"", "complete": false, "id": 0}; 

function App() {
    const [tasktoEdit, SetTasktoEdit]=useState<Task>(emptyTask)
    const[task, SetTasks] = useState<Task[]>([]);
    const token = localStorage.getItem("token");
    useEffect(() =>{
        loaddata();
    },[]);

    function loaddata (){
        axios.get<Task[]>("http://localhost:3001/auth/jwt/tasks", {
          headers:{"Authorization": "Bearer " +token}
        }).then((response)=>{
            SetTasks(response.data);
        });
    }

    function deleteTask(tasktodelete: Task){
        axios.delete("http://localhost:3001/auth/jwt/task/" + tasktodelete.id,{
          headers:{"Authorization": "Bearer " +token}
        } ).then (() =>{
            loaddata();
        })
    }

    function postTask(tasktoPost: Task){
        axios.post<Task>("http://localhost:3001/auth/jwt/tasks", tasktoPost, {
          headers:{"Authorization": "Bearer " +token}
        }).then(() =>{
          loaddata();
        })
        
    }

    function editTask (tasktoEdit: Task){
        axios.put<Task>("http://localhost:3001/auth/jwt/tasks",tasktoEdit, {
          headers:{"Authorization": "Bearer " +token}
        }).then(() =>{
          loaddata();
          SetTasktoEdit(emptyTask);
        })
    }


    function changeTask(task: Task){
        SetTasktoEdit(task);
    }

   
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }

    

    return (
      <div className="App">
        <div>
          {token ? <p>You are logged in</p>:<p>log in</p>}
        </div>
        <h1 id="title">Meine Todo Liste</h1>
        <InputField input={tasktoEdit} addTask={postTask}/>
        <TodoList tasks={task} deleteTask={deleteTask} editTask={changeTask}/>
        <EditTodo tasks={tasktoEdit} editTask={editTask}/>
        <button onClick={handleLogout} id="logbutton">Logout</button>
        
      </div>
    );
}

export default App;
