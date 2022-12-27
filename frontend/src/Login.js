import Header from './Header'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import {host} from './config'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history("/add")
        }
    }, [])

    async function Login() {
        //console.warn(email,password)
        let item = {email,password}
        let result = await fetch(host + "/login",
        {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history("/add")
    }

    return (
        <div>
            <Header />
            <h1>Login Page</h1>
            <Form.Group className="col-sm-6 offset-sm-3">
                <Form.Control type="text" 
                    onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <br />
                <Form.Control type="password" 
                    onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <br />
                <Button variant="primary" onClick={Login} type="submit">
                    Submit
                </Button>
            </Form.Group>

        </div>
    )
}

export default Login