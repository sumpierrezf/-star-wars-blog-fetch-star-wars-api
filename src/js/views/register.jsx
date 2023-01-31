import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import {Navigate} from "react-router-dom"

import "../../styles/home.css";

export const Register = () => {
    const[email,setEmail]=useState("")
    const[user_name,setUser_name]=useState("")
    const[password,setPassword]=useState("")
    const {store, actions}=useContext(Context)

    function enviarDatos(e) {
        e.preventDefault()
        actions.registro(email,user_name,password)
        setUser_name("")
        setEmail("")
        setPassword("")
        console.log(email, user_name, password)
    }

    return (
    <>
    {store.auth === true ? <Navigate to="/"/>:
    <form className="w-50 mx-auto" onSubmit={enviarDatos}>
        <h1>Cree un nuevo usuario:</h1>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
    onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
    <label htmlFor="user_name" className="form-label" aria-describedby="user_nameHelp">User name</label>
    <input type="text" className="form-control" id="user_name" value={user_name}
    onChange={(e)=>setUser_name(e.target.value)}/>
    <div id="user_nameHelp" className="form-text">Ingrese su nombre de usuario</div>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>}
    </>
    );
};