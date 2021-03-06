import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../css/Login.css'
import { auth } from '../Firebase/firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    //#region SignIn / Registration
    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/');
        })
        .catch((e)=>{
            alert(e.message);
        });

    } 

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/');
        }).catch((e)=>{
            alert(e.message);
        })

    };
    //#endregion
  
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="Amazon Logo"></img>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <span className="login__logo__spanInfoAccount">This can be a fictitious email/password</span>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"></input>
                    <button onClick={signIn} type="submit" className="login_signInButton">Sign In</button>
                </form>
                
                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
                <span className="login__container__spanCreateAcount">Please insert your email and password then click to create an account</span>
            </div>
        </div>
    )
}

export default Login
