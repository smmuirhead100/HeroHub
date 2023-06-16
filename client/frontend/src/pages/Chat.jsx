import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Navigate } from "react-router-dom"
import "./styles/chat.css"
import chickenJoe from '../assets/chicken-joe.webp'


export default function Chat(props) {
    const [character, setCharacter] = useState("Chicken Joe")
    const [responseArray, setResponseArray] = useState([])
    const [prompt, setPrompt] = useState("where you from")
    const [sentPrompt, setSentPrompt] = useState(false)
    const [response, setResponse] = useState("")
    
    useEffect(() => {
        Axios.post('http://localhost:3001/chat/getResponse', {
            character, 
            prompt
        }).then((response) => {
        setResponseArray((prev) => [...prev, ['character', response.data]])
        })}, [sentPrompt])

    const chat = responseArray.map((sentence) => {
      return (
        <div className={sentence[0]}>{sentence[1]}</div>
      )
    })

  function sendPrompt() {
    setResponseArray((prev) => [...prev, ['user', prompt]])
    setSentPrompt((prev) => !prev)
  }

  if (!props.authenticated) {
    return <Navigate replace to='/login' />
  } else {
    return (
        <div>
            <div className='chat--wrapper'>
              <div className='chat--image'>
                <img src={chickenJoe} />
              </div>
              <div className='chat--chatbox'>
                <div className='dialogue'>
                  {chat}
                </div>
                <div className='prompt'>
                  <input type="text" placeholder="say something" onChange={(e) => setPrompt(e.target.value)}></input>
                  <button onClick={sendPrompt}>Send</button>
                </div>
              </div>
            </div>
            
            
          
        </div>
    )
  }
}