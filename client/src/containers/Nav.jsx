import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import logo from '../img/LogoCrazyDog.png'
import { connect } from 'react-redux';
import { ordenarAZ, ordenarZA, agregarBusqueda } from '../store/actions'
import './css/Nav.css';
function Nav(props) {
    return (
        <div className='navbackgroud'>
            <Link className='iz' to='/'>
                <div>
                    <img
                        src={logo}
                        alt="Alex? are you..??"
                        height='60px'
                    />
                </div>

            </Link>
            <div className='mid'>
                <NavLink className={(data) => data.isActive ? 'active' : 'desactive'} to='/'>Home </NavLink>
                <NavLink className={(data) => data.isActive ? 'active' : 'desactive'} to='/cards'> Cartas </NavLink>
                <NavLink className={(data) => data.isActive ? 'active' : 'desactive'} to='/registro'> Registro</NavLink>
            </div>
            <div className='de'>
                <SearchBar />
            </div>
            <br />
            <div className='order'>
                <button className='boton'
                    onClick={() => { props.ordenarAZ(props.perros) }}>A-Z</button>
                <button className='boton'
                    onClick={() => { props.ordenarZA(props.perros) }}>Z-A</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        perros: state.state
    }
}
export default connect(mapStateToProps, { ordenarAZ, ordenarZA, agregarBusqueda })(Nav);