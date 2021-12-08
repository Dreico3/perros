import React from "react";

export default function Card(props) {

    return (
        <div>
            <p>enviar props para q ver la targeta?</p>
            <h1>{props.raza}</h1>
            <img
                src={props.img}
                alt="Alex? are you..??"
                height='300px'
            />
            <br/>
            <span>Años de vida: {props.edad}</span>
            <br/>
            <strong>Descripcion breve: {props.description}</strong>
        </div>
    )
}