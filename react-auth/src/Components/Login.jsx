import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [showError, setShowError] = useState(false);
  const handleChange = (event) => {
    // console.log(event.target.value, "- value")
    // console.log(event.target.name, "- name")
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  // console.log(userData, "userData")
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const userDataFromLS = JSON.parse(localStorage.getItem('user'));
      // console.log(userDataFromLS,'- userDataFromLS')
      if (userData.email == userDataFromLS.email && userData.password == userDataFromLS.password) {
        alert("You are logged in...")
        setShowError(false)
        router('/store')
      } else {
        alert("Password or email not matched!!")
      }
    } else {
      setShowError(true)
    }
  }
  return (
    <div>
      <h2>Login</h2>
      {showError && <p className='error-para' >Email or password isn't entered!</p>}
      <form onSubmit={handleSubmit}>
        <label>Email :</label><br />
        <input name='email' type='email' onChange={handleChange} placeholder='Type your email..' /><br />
        <label>Password :</label><br />
        <input name='password' type='password' onChange={handleChange} placeholder='Type your password..' /><br />
        <input type='submit' value='login' /><br />
      </form>
      <button onClick={() => router("/")}>Register</button>
    </div>
  )
}

export default Login




// Want to STORE data into Localstorage

// JS(OBJECT FORMAT) -> BROWSER(JSON FORMAT)
// var Swaraj = { name: 'raj' }
// Localstorage(key, value)
// localStorage.setItem("user", JSON.stringify(Swaraj))


// Want to GET data into Localstorage

// BROWER -> JS (OBJECT, PARSE)
// localStorage.getItem(key)
// var getuserdata = JSON.parse(localStorage.getItem("user"))

// Want to REMOVE data into Localstorage

// localStorage.removeItem(key)
// localStorage.removeItem('user')