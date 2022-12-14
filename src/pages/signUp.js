import React, { useState } from "react"
import '../css/signUp.css';
import { signup } from '../utils';
import ProfileIcon from '../assets/account-circle.png'
import { useNavigate } from "react-router-dom";

const Signup = ({setter, setLoggedIn, setToken, setter2, darkMode, setter3, setter4, setDarkMode}) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()


  const submitHandler = async (event) => {
    event.preventDefault()
    let token = await signup(username, email, password, phone, setter, setLoggedIn, setter2, navigate, setter3, setter4, setDarkMode)
    setToken(token)
  }

  return (
    <div id="signUpContainer" className={darkMode === true? "dark":"light"}>

      <img src={ProfileIcon} alt="profile icon"/>

      <form onSubmit = {submitHandler} id="signUpForm">
        <h1>SIGN UP</h1>
        <input onChange={(event) => setUsername(event.target.value)} placeholder="Username" class="signUpInput"/>

        <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Contact Email" class="signUpInput"/>

        <input onChange={(event) => setPhone(event.target.value)} placeholder="Phone Number" class="signUpInput"/>

        <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" class="signUpInput"/>

        <button type="submit">CREATE ACCOUNT</button>
    
      </form> 

    </div>
  )
}

export default Signup