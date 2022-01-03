import React from "react";
import { Link } from 'react-router-dom';
import './css/Card.css'
export default function Card(props) {

    return (
        <div className = 'targeta'>
            <Link to={`/infocard/${props.id}`}
                className='disabled-link'
            >
                <h1>{props.raza}</h1>
                <img
                    src={props.img}
                    alt="Alex? are you..??"
                    height='330px'
                    width='320px'
                />
            </Link>
        </div>
    )
}