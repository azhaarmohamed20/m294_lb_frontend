import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import axios from 'axios';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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
      axios.post<LoginTodo>("http://localhost:3001/auth/jwt/sign", logintoPost).then(() =>{
       
      })
  }


  return (
    <React.StrictMode>
      {isLoggedIn ? <App /> : <Login input={logintopost} setIsLoggedIn={setIsLoggedIn} addinput={postLogin} />}
    </React.StrictMode>
  );
};

root.render(<Index />);

