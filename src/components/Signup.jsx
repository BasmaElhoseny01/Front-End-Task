import React from 'react'
import { useState } from 'react'

import Buttons from './Buttons';

function Signup() {

    const [Password, setPassword] = useState("");
    const [RePassword, setRePassword] = useState("");

    const SignUpfunc = (event) => {

        // 👇️ prevent page refresh
        event.preventDefault();

        if (Password !== RePassword) {
            alert("Passwords don't match 🥺")
        }
        else {
            alert("succeeded")
            window.location.reload();
        }
        return
    }

    return (
        <div className='InputForm'>
            <form onSubmit={SignUpfunc} className="Form SignUpForm">
                <h5>Please enter your personal info</h5>
                <input className='InputField' type="text" placeholder="Enter your Login" pattern='^[a-zA-Z0-9_]*$' onInvalid={(e) => e.target.setCustomValidity('Please Enter only Capital or Small letters or Digits or Underscore(_) ')} onInput={(e) => e.target.setCustomValidity('')} required />

                <input className='InputField' type="email" placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onInvalid={(e) => e.target.setCustomValidity('Please Enter a valid Email format')} onInput={(e) => e.target.setCustomValidity('')} required />
                <input className='InputField' type="tel" placeholder="Enter your phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onInvalid={(e) => e.target.setCustomValidity('Please Follow Phone Number Format: 123-456-7890')} onInput={(e) => e.target.setCustomValidity('')} required />

                {/* should start with a letter, every character should be a letter, number or underscore, there should not be 2 underscores in a row and it should end with a letter or number. */}
                <input className='InputField' type="password" placeholder="Enter the password" minLength={8} maxLength={16} pattern="[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*" onInvalid={(e) => e.target.setCustomValidity('Password should:\n1. be (8-16)characters long \n 2. begin with a letter\n 3. end with a letter or number\n 4. have only letters,numbers,or underscores(_)\n 5. no more than two consecutive underscores')} onInput={(e) => e.target.setCustomValidity('')} required onChange={event => {
                    setPassword(event.target.value)
                }} />
                <input className='InputField' type="password" placeholder="Re enter the password" minLength={8} maxLength={16} pattern="[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*" onInvalid={(e) => e.target.setCustomValidity('Password should:\n1. be (8-16)characters long \n 2. begin with a letter\n 3. end with a letter or number\n 4. have only letters,numbers,or underscores(_)\n 5. no more than two consecutive underscores')} onInput={(e) => e.target.setCustomValidity('')} required onChange={event => {
                    setRePassword(event.target.value)
                }} />

                <div className='CheckBox'>
                    <input type="checkbox" id="terms" name="terms" required style={{marginRight:"4px"}}/>
                    <label htmlFor="terms">I accept terms of the agreement</label>
                </div>

                <button type='submit' className='btn'>Sign in</button>

            </form>

            <Buttons signup={true}></Buttons>
        </div>
    )
}

export default Signup