import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {

    const history = useHistory();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault(); //stops the refresh
        //login logic
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            //logged in, redirect to home page...
            history.push('/');

        })
        .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();
        //register logic
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //created a user and logged in , redirect to home page...
            history.push('/');
        })
        .catch((e) => alert(e.message));
    };

    return (
        <div className = "login">
            <Link to = "/">
                <img 
                    className = "login__logo"
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt = "" 
                />
            </Link>

            <div className = "login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type = "email" value = {email} onChange = {event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type = "password" value = {password} onChange = {event => setPassword(event.target.value)}/>
                    <button className = "login__signInButton" onClick = {login} type = "submit">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
                <button className = "login__registerButton" onClick = {register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
