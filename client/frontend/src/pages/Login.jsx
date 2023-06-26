import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useLocation, Navigate } from "react-router-dom"
import './styles/login.css'
import GoogleButton from 'react-google-button'

export default function SignUp(props) {
    const [signUpChosen, setSignUpChosen] = useState('chosen')
    const [loginChosen, setLoginChosen] = useState('notChosen')
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [attempts, setAttempts] = useState(true)
    const [success, setSuccess] = useState(false)
    const [signUpAttempts, setSignUpAttempts] = useState(true)
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        Axios.post('https://www.herohub.app/login', {
            username, 
            password
        }).then((response) => {
            setSuccess(response.data.success)
      })
  }, [attempts])

    function signUpClicked(){
        setSignUpChosen('chosen')
        setLoginChosen('notChosen')
    }

    function loginClicked() {
        setSignUpChosen('notChosen')
        setLoginChosen('chosen')
    }

  useEffect(() => {
    firstRender ? setFirstRender(false) :
    Axios.post('https://www.herohub.app/login/createUser', {
      firstName, 
      lastName,
      email,
      username,
      password: password
    }).then((response) => 
    setSuccess(response.data.success))
  }, [signUpAttempts])

    if (success) {
        props.authenticate()
    }

    const currChoice = loginChosen === 'chosen' ? 'Login' : 'Sign up'


    if (props.authenticated) {
        return <Navigate replace to='/choose' />
      } else {
            return (
                <div>
                    <div className='login--background'>
                        <div className='login--wrapper'>
                            <div className='loginChooser'>
                                <div className={signUpChosen} onClick={signUpClicked}> Sign up</div>
                                <div className={loginChosen} onClick={loginClicked}>Log in</div>
                            </div>
                            <div className='login--choice'>{currChoice}</div>
                            <GoogleButton label='With Google'/>
                            <div className='login--splitter'>OR</div>
                            {loginChosen === 'chosen' ? 
                                <div className='login--input'>
                                    <input placeholder='Username' type='text' id='username' onChange={(e) => setUsername(e.target.value)}></input>
                                    <input placeholder='Password' type='password' id='username' onChange={(e) => setPassword(e.target.value)}></input>
                                    <button className='login--button' onClick={() => setAttempts((prev) => !prev)}>Submit</button>
                                </div> :
                           
                                <div className='login--input'>
                                    <input placeholder='First Name' type="text" id='firstName' onChange={(e) => setFirstName(e.target.value)}></input>
                                    <input placeholder='Last Name' type='text' id='lastName' onChange={(e) => setLastName(e.target.value)}></input>
                                    <input placeholder='Email'type='email' id='email' onChange={(e) => setEmail(e.target.value)}></input>
                                    <input placeholder='Username' type='text' id='username' onChange={(e) => setUsername(e.target.value)}></input>
                                    <input placeholder='Password' type='password' id='password' onChange={(e) => setPassword(e.target.value)}></input>
                                    <button className='login--button' onClick={() => setSignUpAttempts((prev) => !prev)}>{currChoice}</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )
      }
}