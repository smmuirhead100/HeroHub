import { useState, useEffect } from 'react'
import Axios from 'axios'


export default function Prompter() {
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
        Axios.post('http://localhost:3001/getResponse', {
            character, 
            prompt
        }).then((response) => {
        setResponse(response.data)
      })
  }, [sentPrompt])

  function handleCharacterSelection(e) {
    setCharacter(e.target.value)
  }

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