import React from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { agregarBusqueda } from '../store/actions'
function SearchBar(props) {
    let histori = useNavigate();
    const [busca, setBusca] = React.useState({
        nombre: ''
    });
    const setState = (e) => {
        setBusca({
            ...busca,
            [e.target.name]: e.target.value
        })
    }
    const busqueda = () => {
        //props.perros.find(p => p.name.toLowerCase() === busca.nombre.toLowerCase())
        let buscados = props.perros.filter(p => p.name.toLowerCase() === busca.nombre.toLowerCase())
        return buscados;
    }
    return (
        <div>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    props.agregarBusqueda(busqueda())
                    histori('/');
                    //console.log(props);
                }
            }>
                <input type='text' name='nombre'
                    className="datos"
                    onChange={e => setState(e)}
                />
                <input type='submit' value='buscar...' />
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        perros: state.state,
        busqueda: state.search,
        //BUSQUEDA
    }
}
export default connect(mapStateToProps, { agregarBusqueda })(SearchBar);