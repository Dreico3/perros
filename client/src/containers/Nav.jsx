import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Form from '../containers/Form';
import logo from '../img/LogoCrazyDog.png'

import './css/Nav.css';
export default function Nav() {
    return (
        <div className='navbackgroud'>
            <div className='de'>
                <img
                    src={logo}
                    alt="Alex? are you..??"
                    height='60px'
                />
            </div>
            <div>
                <NavLink className={(data) => data.isActive ? 'active' : 'desactive'} to='/'>Home </NavLink>
                <NavLink className={(data) => data.isActive ? 'active' : 'desactive'} to='/cards'> Cartas </NavLink>
                <NavLink className={(data) => data.isActive ? 'active' : 'desactive'} to='/registro'> Registro</NavLink>
            </div>
            <div className='iz'>
                <SearchBar />
            </div>
        </div>
    )
}