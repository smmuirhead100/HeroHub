import './styles/home.css'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { Navigate } from "react-router-dom"

export default function Home(props) {
    const[clicked, setClicked] = useState(false)

    function signUpClicked(){
        setClicked(true)
    }
    if (clicked) {
        return <Navigate replace to='/login' />
      } else {
        return (
        <div className="home--wrapper">
            <div className="home--header">
                <img src={logo} />
                <div className="pages">
                    <div>About</div>
                    <div>Home</div>
                </div>
            </div>
            <div className="home--info">
                <h2 className="title">Talk and learn with anyone.</h2>
                <div className="description">HeroHub is an online chat hub for your favorite fictional characters.
                Leveraging the power of AI, HeroHub is dedicated to providing a fun and 
                positive experience for our users. HeroHub is also committed to a safe experience 
                by implementing the highest safety measures provided by OpenAI. 
                </div>
                <div className='button'>
                    <button onClick={signUpClicked}>Sign Up</button>
                    <a>Or log in</a>
                </div>
            </div>
        </div>
        )
      }
}
