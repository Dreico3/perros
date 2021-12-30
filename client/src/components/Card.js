import React from "react";
import { Link } from 'react-router-dom';
export default function Card(props) {

    return (
        <div>
            <Link to={`/infocard/${props.id}`}>
                <h1>{props.raza}</h1>
                <img
                    src={props.img}
                    alt="Alex? are you..??"
                    height='300px'
                />
                <br />
                <span>Años de vida: {props.edad}</span>
                <br />
                <strong>Descripcion breve: {props.description}</strong>
            </Link>
        </div>
    )
}