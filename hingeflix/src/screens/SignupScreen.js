import React,{ useRef } from 'react';
// import { auth } from '../fbase';
import './SignupScreen.css';


function SignupScreen() {
    // const emailRef = useRef(null);
    // const passwordRef = useRef(null);


    // const register = (e) => {
    //     e.preventDefault();
    //     auth.createUserWithEmailandPassword(
    //         emailRef.current.value,
    //         passwordRef.current.value
    //     ).then((authUser) => {
    //         console.log(authUser)
    //     }).catch(error => {
    //         alert(error.message);
    //     });
    // };

    // const signIn = (e) => {
    //     e.preventDefault();
    // };
  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input  placeholder='Email Address' type="email"/>
            <input  placeholder='password' type="password"/>
            <button 
            type='submit'>Sign In</button>
            <h4>
            <span className='signupScreen_gray'>New to Netflix? </span>
            <span 
            className='singupScreen_link'> Sign Up Now! </span>
            </h4>
        </form>
    </div>
  )
}

export default SignupScreen
