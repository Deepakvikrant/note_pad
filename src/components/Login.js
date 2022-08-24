import React, { useState } from 'react'
import NoteContext from '../context/note/noteContext';
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [credentials, setCredentials] = useState({email:"", password:""})


    let navigate = useNavigate();
  

    const host = "http://localhost:5000"

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({email: credentials.email, password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //save the AuthToken reDirect
            localStorage.setItem('token', json.authtoken);
            navigate("../", { replace: true });
        }
        else{
            alert("Invalid Credentials");
        }
    };
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }



    return (
        <div><form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Email1" className="form-label">Email address</label>
                <input type="email" value={credentials.email} onChange={onChange} className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" value={credentials.password} onChange={onChange} className="form-control" id="password" name='password' />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form></div>
    )
}

export default Login