import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [attempts, setAttempts] = useState(true)
    const [success, setSuccess] = useState(false)
    
    useEffect(() => {
        Axios.post('http://localhost:3001/login', {
            username, 
            password
        }).then((response) => {
            setSuccess(response.data.success)
      })
  }, [attempts])



    return (
        <div>
            <h1>Please Sign In</h1>
            <h2>Your signed in: {success.toString()}</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={() => setAttempts((prev) => !prev)}>Submit</button>

            <h1>Or Sign Up</h1>
            <input type="text" placeholder="John Doe">Name:</input>
        </div>
    )
}