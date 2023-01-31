import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import {Navigate} from "react-router-dom"

import "../../styles/home.css";

export const Form = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const {store, actions}=useContext(Context)

    function enviarDatos(e) {
        e.preventDefault()
        actions.login(email,password)
        setEmail("")
        setPassword("")
        console.log(email, password)
    }

    return (
    <>
    {store.auth === true ? <Navigate to="/"/>:
    <form className="w-50 mx-auto" onSubmit={enviarDatos}>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
    onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
