import { useState } from 'react'
import chickenJoe from '../assets/chicken-joe.webp'
import CharacterCard from './CharacterCard'
import jackSparrow from '../assets/jack-sparrow.png'
import './styles/chooseCharacter.css'

export default function ChooseCharacter(props){
    
    if (!props.authenticated) {
        return <Navigate replace to='/login' />
      } else {
        return (
        <div className='chooseCharacter--wrapper'>
            <h1>Who do you want to talk to?</h1>
            <div className='chooseCharacter--cards'>
                <CharacterCard character='Chicken Joe' image={chickenJoe} description="this is chicken joe" />
                <CharacterCard character='Jack Sparrow' image={jackSparrow} description="this is Jack Sparrow"/>
                <CharacterCard character='Chicken Joe' image={chickenJoe} description="this is chicken joe"/>
                <CharacterCard character='Jack Sparrow' image={jackSparrow} description="this is Jack Sparrow"/>
                <CharacterCard character='Chicken Joe' image={chickenJoe} description="this is chicken joe"/>
                <CharacterCard character='Jack Sparrow' image={jackSparrow} description="this is Jack Sparrow"/>
            </div>
        </div>
        )
      }
}