import React, { useState, useEffect } from "react";import './styles/characterCard.css'
import { useNavigate } from "react-router-dom"

export default function CharacterCard(props) {
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const chat = (props) => {
            navigate("/chat", {
                state: {
                    test: props
                }
            })
        }
        if (clicked) {
            chat(props)
        }
    }, [clicked])
    
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
        )
    }