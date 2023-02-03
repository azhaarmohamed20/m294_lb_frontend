import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import axios from 'axios';
import { tokenToString } from 'typescript';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export type JWTtoken={
  token: string,
}
export type LoginTodo={
  email: string,
  password: string,
}
const emptyLogin: LoginTodo ={"email": "", "password": ""}

const Index = () => {
  const[logintopost, Setlogintopost]=useState<LoginTodo>(emptyLogin);
  const [logged, Setlogged]=useState<LoginTodo[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function postLogin(logintoPost: LoginTodo){
      axios.post<JWTtoken>("http://localhost:3001/auth/jwt/sign", logintoPost, {
        headers:{Authorization: 'Bearer ${token}'}
      })
      .then((response) =>{
        let token = response.data;
        localStorage.setItem("token", token.token);
        verfiyLogin();
        setIsLoggedIn(true);
      })
  }
  const token = localStorage.getItem("token");
  function verfiyLogin(){
      axios.get("http://localhost:3001/auth/jwt/verify", {
        headers:{"Authorization": "Bearer " +token}
      })
      .then(()=>{
        localStorage.getItem("token");
        
      })
  }

  return (
    <React.StrictMode>
      {isLoggedIn ? <App /> : <Login input={logintopost} setIsLoggedIn={setIsLoggedIn} addinput={postLogin} />}
    </React.StrictMode>
  );
};

root.render(<Index />);

