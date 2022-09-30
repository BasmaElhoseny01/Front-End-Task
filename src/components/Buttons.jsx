import React from 'react'
import { useState, useEffect } from 'react'
function Buttons({ signup }) {
    const [SignUp, setSignUp] = useState("")
    
    let ActiveStyle={
        backgroundColor: "transparent",
        color:"black"
 
    }

    let UnActiveStyle={
        // backgroundColor: "blue",
        backgroundColor: "transparent",
        borderTop:"1px solid ghostwhite",
        color:"ghostwhite"
    }

    useEffect(() => {
        setSignUp(signup)
    }, [])

    const SIGIN = () => {
        if(signup!=false){
        setSignUp(false)
        window.location.href='/'
        }
    }

    const SIGNUP = () => {
        if(signup!=true){
        setSignUp(true)
        window.location.href='./signup'
        }
    }

    return (
        <div className='Buttons'>
            <button onClick={SIGIN} style={!SignUp?ActiveStyle:UnActiveStyle}>SIGN IN</button>
            <button onClick={SIGNUP} style={SignUp?ActiveStyle:UnActiveStyle}>SIGN UP</button>
        </div>
    )
}

export default Buttons