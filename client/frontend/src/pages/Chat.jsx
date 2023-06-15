import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Navigate } from "react-router-dom"


export default function Chat(props) {
    const characters = ['Chicken Joe', 'Jack Sparrow']
    const [character, setCharacter] = useState("Chicken Joe")
    const [prompt, setPrompt] = useState("where you from")
    const [body, setBody] = useState({
        character: {character}, 
        prompt: {prompt}
    })
    const [sentPrompt, setSentPrompt] = useState(false)
    const [response, setResponse] = useState("")
    
    useEffect(() => {
        Axios.post('http://localhost:3001/chat/getResponse', {
            character, 
            prompt
        }).then((response) => {
        setResponse(response.data)
      })
  }, [sentPrompt])

  function handleCharacterSelection(e) {
    setCharacter(e.target.value)
  }
  if (!props.authenticated) {
    return <Navigate replace to='/login' />
  } else {
    return (
        <div>
            <div>{character}: {response}</div>
            <input type="text" placeholder="say something" onChange={(e) => setPrompt(e.target.value)}></input>
            <button onClick={() => setSentPrompt((prev) => !prev)}>submit</button>
            <div className='characterSelection'>
                <label for="chickenJoe">Chicken Joe</label>
                <input id="chickenJoe" name="character" value={characters[0]} type="radio" onChange={handleCharacterSelection} />
                <label for="jackSparrow">Jack Sparrow</label>
                <input id="jackSparrow" name="character" value={characters[1]} type="radio" onChange={handleCharacterSelection} />
            </div>
        </div>
    )
  }
}