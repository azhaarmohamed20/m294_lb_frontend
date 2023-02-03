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
    


    const handleChange = (event: React.ChangeEvent<HTMLFormElement>) =>{    
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
            <form onChange={handleChange} onSubmit={onFormSubmit}>
                <input type="email" name='email' value={login.email} required ></input>
                <br></br>
                <input type="password" name='password' value={login.password} pattern="\S*" required  ></input>
                <input type="submit" value="Submit" ></input>
            </form>
        </div>
    )
}

export default Login;