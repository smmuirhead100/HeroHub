import { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'
import './styles/chooseCharacter.css'
import { Navigate } from "react-router-dom"
import Axios from 'axios';



export default function ChooseCharacter(props){
    const [characters, setCharacters] = useState([])

    useEffect(() => {
      Axios.get('http://www.herohub.app/getCharacters')
        .then((response) => {
          setCharacters(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [])
  
    

    if (!props.authenticated) {
        return <Navigate replace to='/login'></Navigate>
      } else {
        return (
        <div className='chooseCharacter--wrapper'>
            <h1>Who do you want to talk to?</h1>
            <div className='chooseCharacter--cards'>
                {characters.map((character) => (
                  <CharacterCard 
                    character={character.name}
                    image={character.image}
                    description={character.description}
                  />
                ))}
            </div>
        </div>
        )
      }
}