import { Button } from "react-bootstrap";
import React ,{useState,useEffect} from "react";
import {useNavigate } from "react-router-dom";
import Header from "./Header";
import {host} from './config'

function Register()
{
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history("/add");
        }
    },[])

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const history = useNavigate ();

   async function signUp()
    {
        let item = {name,password,email}
        console.warn(item)
        let result= await fetch(host + "/register",
        {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        console.warn(result)
        localStorage.setItem('user-info',JSON.stringify(result))
        history("/add")
    }

    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
            className="form-control is-invalid" placeholder="name"/>
            <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
            className="form-control is-invalid" placeholder="password"/>
            <br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}
            className="form-control is-invalid" placeholder="email"/>
            <br/>
            <Button onClick={signUp}>Sign UP</Button>
        </div>
        </>
    )
}

export default Register