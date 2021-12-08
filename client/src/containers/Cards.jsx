import React from "react";
import Card from '../components/Card.js'
export default function Cards() {
    const [perritos,getPerritos]=React.useState([])

    const traerPerros = async() => {
       const res= await fetch('https://api.thedogapi.com/v1/breeds')
       const dogss =await res.json();
       var dogs = []
       for (let i = 0; i < 10; i++) {
           dogs.push(dogss[i])
       }
       return dogs;  
       
    }
    const actualizarPerritos=()=>{
        traerPerros()
        .then(listaPerros=>{
            getPerritos(listaPerros);
        })
    }
    actualizarPerritos();
    
    return (
        <div>
            <h1>esto es cards</h1>
            {perritos.map(r => {
                return(
                <Card
                    key={r.id}
                    raza={r.name}
                    description={r.bred_for}
                    edad={r.life_span}
                    img={r.image.url}
                />)
            })}
        </div>
    )
}