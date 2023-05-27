import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [showError, setShowError] = useState(false);
  console.log(userData, 'userData')
  const handleChange = (event) => {
    // console.log(event.target.value, "- value")
    // console.log(event.target.name, "- name")
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      setShowError(false);
      const userObject = { email: userData.email, password: userData.password }
      localStorage.setItem("user", JSON.stringify(userObject))
      router('/login');
      alert("Submited data...")
    } else {
      setShowError(true)
    }
  }
  return (
    <div>
      <h2>Register</h2>
      {showError && <p className='error-para' >Email or password isn't entered!</p>}
      <form onSubmit={handleSubmit}>
        <label>Email</label><br />
        <input name='email' type='email' placeholder='Type your email..' onChange={handleChange} /><br />
        <label>Password</label><br />
        <input name='password' type='password' placeholder='Type your password..' onChange={handleChange} /><br />
        <input type='submit' value='Register' />
      </form>
      <button onClick={() => router('/login')}>Login</button>
    </div>
  )
}

export default Register