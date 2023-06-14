import { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'
import Prompter from './components/Prompter'
import SignUp from './components/SignUp'

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [attempts, setAttempts] = useState(true)
  const [success, setSuccess] = useState(false)
  const [signUpAttempts, setSignUpAttempts] = useState(true)
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    firstRender ? setFirstRender(false) : 
    Axios.post('http://localhost:3001/login', {
        username,
        password
    }).then((response) => {
        setSuccess(response.data.success)
  })
  }, [attempts])
  
  useEffect(() => {
    firstRender ? setFirstRender(false) :
    Axios.post('http://localhost:3001/createUser', {
      name, 
      age,
      username,
      password: password
    }).then((response) => 
    setSuccess(response.data.success))
  }, [signUpAttempts])


 return (<div>
            {success ? <Prompter/> : 
            <div>
                <h1>Please Sign In</h1>
                <h2>Your signed in: {success.toString()}</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={() => setAttempts((prev) => !prev)}>Submit</button>
                <h1>Or Sign Up</h1>
                <input type="text" placeholder="John Doe" onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="25" onChange={(e) => setAge(e.target.value)}/>
                <input type="text" placeholder="JohnDoe25" onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="password123" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={() => setSignUpAttempts((prev) => !prev)}>sign up</button>
            </div>
            }
        </div>
 )
}

export default App;
