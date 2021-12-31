import React from "react";
import { connect } from 'react-redux';
import Card from '../components/Card'
import './css/Home.css'
function Home({ busqueda }) {

    return (
        <div className='home'>
            <br />
            <h1>Bienvenidos a la Api de perritos</h1>
            {busqueda!==null ? busqueda.map(p => {
                if (p.id.length > 4) {
                    return (
                        <Card
                            key={p.id}
                            id={p.id}
                            raza={p.name}
                            description={p.bred_for}
                            edad={p.life_span}
                            img={p.image}
                        />)


                } else {
                    return (
                        <Card
                            key={p.id}
                            id={p.id}
                            raza={p.name}
                            description={p.bred_for}
                            edad={p.life_span}
                            img={p.image.url}
                        />)
                }
            }) : <h1>hola torola</h1>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        busqueda: state.search,
        //BUSQUEDA
    }
}
export default connect(mapStateToProps, null)(Home);