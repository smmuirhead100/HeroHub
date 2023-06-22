import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useLocation, Navigate } from "react-router-dom"
import "./styles/chat.css"


export default function Chat(props) {
    const location = useLocation();
    const [character, setCharacter] = useState(location.state.test.character)
    const [responseArray, setResponseArray] = useState([])
    const [prompt, setPrompt] = useState("hello")
    const [sentPrompt, setSentPrompt] = useState(false)
    const [response, setResponse] = useState("")
    

    useEffect(() => {
        Axios.post('http://localhost:3001/chat/getResponse', {
            character, 
            prompt
        }).then((response) => {
          setResponseArray((prev) => [...prev, ['character', response.data]])
          console.log('sent')
          console.log(responseArray)
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
                <img src={location.state.test.image} />
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