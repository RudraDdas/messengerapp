import React, { useState } from 'react'
import Login from "./Authentication/Login"
import Signup from './Authentication/Signup'
// import { Route ,Link} from 'react-router-dom'


const Homepage = ({isloggedin, isSignup}) => {

  const [newUser, setNewuser] = useState(true)

  return (
    <div className='homepage_main'>
      <div className='app_name'>
          Lets Chat
      </div>

      <div className='authentication_subdiv' >
        <div className={newUser ? 'login_div': 'login_div colorid'} id="loginid" onClick={()=>setNewuser(false)}>
          Login
        </div>
        <div className={newUser ? 'signup_div colorid':'signup_div'} id="signupid" onClick={()=>setNewuser(true)}>
            Signup
        </div>
      </div>

      <div className='loginpage'> 
        {newUser ? <Signup isSignup={isSignup}/>:<Login isloggedin={isloggedin}/> }
      </div>


    </div>
  )
}

export default Homepage