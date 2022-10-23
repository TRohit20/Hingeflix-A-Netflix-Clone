import React, { useState } from 'react';
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn,setSignIn] = useState(false);

  return (
    <div className='LoginScreen'>
        <div className="loginScreen_background">
            <img className='loginScreen_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo'/>
            <button onClick={() => setSignIn(true)} 
            className='loginScreenn_button'>Sign In</button>

            <div className='loginScreen_gradient' />
        </div>
        <div className='loginScreen_body'>
            {signIn ? (
                <SignupScreen/>
            ): (
                <>
                <h1>Unlimited movies, TV Shows and more</h1>
                <h2>Watch anywhere, cancel at anytime.</h2>
                <h3>Ready to watch now? Enter your email to create a new account or restart a old one!</h3>

                <div className="loginScreen_input" >
                    <form>
                        <input type="email" placeholder='Enter your email address'/>
                        <button onClick={() => setSignIn(true)}
                        className='loginScreen_getstarted'>Get Started!</button>
                    </form>
                </div>
            </>
            )}
            
        </div>
    </div>
  )
}

export default LoginScreen