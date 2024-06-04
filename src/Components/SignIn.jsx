
import React from 'react'

const SignIn = () =>{
  return (
    <>
      <h2 className="signIn-heading">Sign In</h2>
      <div className="signIn">
        <div className="signIn-container">
          <form  className="signIn-input-holder">
            <input
              type="text"
              className="signIn-input"
              placeholder='Enter Email' required
             />
            <input
              type="password"
              className="signIn-input"
              placeholder='Enter Password'
              required
             />
            <button type="submit" className="signIn-btn">SIGN IN</button>
          </form>
          <p className="or">Or</p>
          <form className="google-signIn">
            <button type="submit" className="google-signIn-btn">Sign In With Google</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn


