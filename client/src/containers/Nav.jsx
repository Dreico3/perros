import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../components/SearchBar';

import './css/Nav.css';
export default function Nav() {
    return (
        <div className='navbackgroud'>
        <NavLink className={(data)=>data.isActive?'active':'desactive'} to='/'> Home </NavLink>
        <NavLink className={(data)=>data.isActive?'active':'desactive'} to='/cards'>cartas</NavLink>
        <SearchBar/>
        </div>
    )
}