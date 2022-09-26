import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import logo from "../img/LogoCrazyDog.png";
import { connect } from "react-redux";
import { ordenarAZ, ordenarZA, agregarBusqueda } from "../store/actions";
import "./css/Nav.css";
function Nav(props) {
    return (
        <div className="nav">
            <div className="nav-contendImg">
                <Link to="/">
                    <img
                        className="nav-logo"
                        src={logo}
                        alt="Alex? are you..??"
                    />
                </Link>
            </div>
            <div className="nav-links">
                <NavLink
                    to="/home"
                    className={(active)=>active.isActive?"active":"desactive"}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/cards"
                    className={(active)=>active.isActive?"active":"desactive"}
                >
                    Cartas
                </NavLink>
                <NavLink
                    to="/registro"
                    className={(active)=>active.isActive?"active":"desactive"}
                >
                    Registro
                </NavLink>
            </div>
            <div className="nav-searchBar">
                <SearchBar />
            </div>
            <div className="nav-orderButtons">
                <button
                    className="nav-boton"
                    onClick={() => {
                        props.ordenarAZ(props.perros);
                    }}
                >
                    A-Z
                </button>
                <button
                    className="nav-boton"
                    onClick={() => {
                        props.ordenarZA(props.perros);
                    }}
                >
                    Z-A
                </button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        perros: state.state,
    };
};
export default connect(mapStateToProps, {
    ordenarAZ,
    ordenarZA,
    agregarBusqueda,
})(Nav);
