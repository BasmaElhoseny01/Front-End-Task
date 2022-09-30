import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Buttons from './Buttons';

function Sigin() {

  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");

  const Login = (event) => {
    event.preventDefault();

    var re = new RegExp("[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*");
    // console.log(Password)
    // console.log(re.test(Password))
    if (!re.test(Password)) {
      alert("Invalid username or password")
      return;
    }

    re = new RegExp("^[a-zA-Z0-9_]*$")
    if (!re.test(Username)) {
      //check of email
      re = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
      if (!re.test(Username)) {
        alert("Invalid username or password")
        return;
      }
    }
    alert("Login Sucesssfully")
    window.location.reload();
  }

  return (
    <div className='InputForm'>
      <form onSubmit={Login} className="Form SigInForm">
        <h5>Please Enter your personal info</h5>
        <input className='InputField' type="text" placeholder="Enter your Login" required onChange={event => {
          setUsername(event.target.value)
        }} />

        {/* should start with a letter, every character should be a letter, number or underscore, there should not be 2 underscores in a row and it should end with a letter or number. */}
        <input className='InputField' type="password" placeholder="Enter the password" required onChange={event => {
          setPassword(event.target.value)
        }} />

        <div className='Signin_CheckBox_link'>
          <div className='CheckBox'>
            <input type="checkbox" id="remember" name="remember" required style={{ marginRight: "4px" }} />
            <label htmlFor="remember">Remember me</label>
          </div>


          <Link to="/forgetpassword">Forgot password?</Link>
        </div>

        <input className='InputField' style={{ visibility: "hidden"}} />

        <button type='submit' className='btn'>Sign in</button>
        <Link to="/social">Login through social networks accounts</Link>

      </form>

      <Buttons signup={false}></Buttons>
    </div>
  )
}

export default Sigin