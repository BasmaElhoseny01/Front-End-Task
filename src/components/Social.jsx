import React from 'react'
import { Link } from 'react-router-dom';

import Buttons from './Buttons'

function Social() {

    const Login = (event) => {
        event.preventDefault();
        alert("Login Sucesssfully")
        window.location.reload();
    }

    return (
        <div className='InputForm'>
            <form onSubmit={Login} className="Form SocialForm">
                <h5>Login via a social network</h5>

                <button type='submit' className='Gmailbtn'>Log in via Gmail</button>
                <p className='Link'>Enter <Link to="/">username or password</Link> or <Link to="/signup"> register</Link></p>
                <input className='InputField' style={{ visibility: "hidden" }} />
            </form>

            <Buttons signup={false}></Buttons>
        </div>
    )
}

export default Social