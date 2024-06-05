import { auth, provider } from './firebase'
import { signInWithPopup } from 'firebase/auth'
import Home from './Home';
import { useState, useEffect } from 'react'


const SignIn = () => {

  // Email-Password authorisation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // For google authorisation
  const [value, setValue] = useState('');

  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      console.log('User signed in with Google:', data.user);
      // Handle successful sign-in (e.g., redirect to Home)
      handleSubmit();
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };


  useEffect(() => {
    setValue(localStorage.getItem("email"))
  })

  // To check if the value being entered is actually correct or not
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log('User created:', userCredential.user);
      // Handle successful signup (e.g., redirect to another page)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h2 className="signIn-heading">Sign In</h2>
      <div className="signIn">
        <div className="signIn-container">
          <form className="signIn-input-holder">
            <input
              onSubmit={handleSubmit}
              type="text"
              className="signIn-input"
              placeholder='Enter Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              onSubmit={handleSubmit}
              type="password"
              className="signIn-input"
              placeholder='Enter Password'
              required
              maxLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="signIn-btn" >SIGN IN</button>
          </form>
          <p className="or">Or</p>
          <form onClick={handleClick} className="google-signIn">
            <button
              type="button"
              className="google-signIn-btn"
              onClick={handleClick}
              onSubmit={handleSubmit}>
              Sign In With Google
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn


