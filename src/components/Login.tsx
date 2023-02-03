import axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
import {LoginTodo} from '../index';

interface LoginProps {
    input: LoginTodo;
    addinput: (input: LoginTodo)=> void;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const emptyLogin: LoginTodo ={"email": "", "password": ""}

function Login(props:LoginProps){
    const [login, Setlogin] = useState(props.input ?? emptyLogin);
    


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{    
        event.preventDefault();
        const {name, value} = event.target;
        Setlogin({...login, [name]: value});
       
    }


    function onFormSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        props.addinput(login);
    }
    
    

    return(
        <div>
            <h1>Log in</h1>
            <p>Das passwort muss 8 Characters lang sein.</p>
            <form  onSubmit={onFormSubmit}>
                <label htmlFor='Email'>Email: </label>
                <input type="email" name='email' value={login.email} onChange={handleChange} required ></input>
                <br></br>
                <label htmlFor='Password'>Passwort: </label>
                <input type="password" name='password' value={login.password} pattern="\S*" required  onChange={handleChange} ></input>
                <input type="submit" value="Submit" ></input>
            </form>
        </div>
    )
}

export default Login;