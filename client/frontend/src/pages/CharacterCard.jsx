import React from "react"
import './styles/characterCard.css'
import { Navigate } from "react-router-dom"

export default function CharacterCard(props) {
    const [clicked, setClicked] = React.useState(false)
    
    if (clicked) {
        return <Navigate replace to='/chat' />
    } else {
        return (
            <div className="characterCard--wrapper" onClick={()=> setClicked(true)}>
                <div className="top">
                    <img src={props.image} />
                </div>
                <div className="bottom">
                    <h2>{props.character}</h2>
                    <div className="description">{props.description}</div>
                </div>

            </div>
        )}
}