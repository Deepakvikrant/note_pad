import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })


    let navigate = useNavigate();


    //const host = "http://localhost:5000"

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password, cpassword } = credentials;

        //const response = await fetch(`${host}/api/auth/createuser`, {
        const response = await fetch('http://localhost:5000/api/auth/createuser', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);

        //save the AuthToken reDirect
        if (json.success) {
            //save the AuthToken reDirect
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            props.showAlert("Account created successfuly", "success");
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>


                <div className="form-group my-2">
                    <label htmlFor="name"> Name </label>
                    <input type="text" className="form-control" id="name" name='name' placeholder="Jhon Smith" onChange={onChange} />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onChange} />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' placeholder="Password" onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default Signup