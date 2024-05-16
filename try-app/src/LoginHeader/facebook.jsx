import React from 'react';
/* import { Link } from 'react-router-dom'; */
import Logo from './4lCu2zih0ca.svg';
export default function facebook() {

const login =()=>{
  let user =  document.querySelector('.username').value;
   let pass = document.querySelector('.password').value;

   let usercode = "facebook";
   let passcode = "facebook";

   if(user===usercode && pass=== passcode){
    alert("hello...Login Successful")
   }
   else{
    alert("Failed to login")
   }

}

    return (
    <div className='face-body'>
        <body>
        <div className="face-logo">
        <img src={Logo} alt="" className='face-logos'/>
        </div>
        
     <div className='facebook'>
     <div>
            <h2 className='p-tags'>Log in to Facebook</h2>
            <div className='face-input'>
                <input type='text'placeholder='Email address or phone number' className='username'/>
            </div>
            <div className='face-input'>
                <input type='password' placeholder='Password' className='password'/>
            </div>
            <div className='face-btn'>
                <button onClick={login}>
                    Log in
                </button>
            </div>
            <div className='face-link'>
                <a href="">Forgotten account?</a>
                <a href="">Sign Up for Facebook</a>

            </div>
        </div>
     </div>
        </body>

    </div>
  )
}
