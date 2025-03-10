import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

import { IoIosCloseCircle } from "react-icons/io";

function LoginPopUp({ setShowLogin }) {

    const { url, setToken } = useContext(StoreContext)

    const [currentState, setCurrentState] = useState('Sign Up')
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();

        let newURL = url;
        if (currentState === "Login") {
            newURL += "/api/user/login"
        }
        else {
            newURL += "/api/user/register"
        }

        const response = await axios.post(newURL, data)

        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <IoIosCloseCircle className='img' onClick={() => setShowLogin(false)} />
                </div>
                <div className="login-popup-input">
                    {
                        currentState === "Login" ? "" : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />
                    }
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your E-mail' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
                    <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the term of use & privacy policy</p>
                </div>
                {
                    currentState === "Login"
                        ? <p>Create a new account?<span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                        : <p>Already have account?<span onClick={() => setCurrentState("Login")}>Login Here</span></p>
                }

            </form>
        </div>
    )
}

export default LoginPopUp