import { useState } from 'react'
import chickenJoe from '../assets/chicken-joe.webp'
import CharacterCard from './CharacterCard'

export default function ChooseCharacter(){
    return (
    <div className='chooseCharacter--wrapper'>
        <h1>Who do you want to talk to?</h1>
        <div chooseCharacter--cards>
            <CharacterCard character='chicken-joe' image={chickenJoe}/>
        </div>
    </div>
    )
}