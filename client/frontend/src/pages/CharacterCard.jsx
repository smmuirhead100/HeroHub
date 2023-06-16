import React from "react"
import './styles/characterCard.css'

export default function CharacterCard(props) {
    return (
        <div className="characterCard--wrapper">
            <div className="top">
                <img src={props.image} />
            </div>
            <div className="bottom">
                <h2>{props.character}</h2>
            </div>

        </div>
    )
}