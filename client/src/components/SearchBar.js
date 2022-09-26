import React from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { agregarBusqueda } from '../store/actions'
import "./css/SearchBar.css"
function SearchBar(props) {
    let histori = useNavigate();
    const [busca, setBusca] = React.useState({
        nombre: '',
        check: {
            nom: true,
            tem: false
        }
    });

    const setState = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        if (e.target.type !== 'checkbox') {
            setBusca({
                ...busca,
                [e.target.name]: value
            })
        } else {
            if(busca.check.nom){
                setBusca({
                    ...busca,
                    check: {
                        ...busca.check,
                        nom: false,
                        tem: true
                    }
                })
                
            }else{
                setBusca({
                    ...busca,
                    check: {
                        ...busca.check,
                        nom: true,
                        tem: false
                    }
                })
                
            }
        }
    }
    const busqueda = () => {
        //props.perros.find(p => p.name.toLowerCase() === busca.nombre.toLowerCase())
        if (busca.check.nom) {

            let buscados = props.perros.filter(p => p.name.toLowerCase() === busca.nombre.toLowerCase())
            return buscados;
        } else {
            let buscados = [];
            for (let i = 0; i < props.perros.length; i++) {
                if (props.perros[i].temperamentos) {
                    for (let j = 0; j < props.perros[i].temperamentos.length; j++) {
                        if (props.perros[i].temperamentos[j].nombre.toLowerCase() === busca.nombre.toLowerCase()) {
                            buscados.push(props.perros[i])
                        }
                    }
                }else if(props.perros[i].temperament){
                    let auxTemp=props.perros[i].temperament.replace(/ /g,'');
                    auxTemp=auxTemp.split(',');
                    for(let j=0;j<auxTemp.length;j++){
                        if(auxTemp[j].toLowerCase()===busca.nombre.toLowerCase()){
                            buscados.push(props.perros[i])
                        }
                    }
                }
            }
            return buscados;
        }
    }
    return (
        <div>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    props.agregarBusqueda(busqueda())
                    
                    histori('/home');
                }
            }>
                <input type='text' name='nombre'
                    className="form-busqueda"
                    autoComplete="off"
                    onChange={e => setState(e)}
                />
                <input className="form-boton" type='submit' value='buscar...' />
                <br />
                <label>
                    nombre
                    <input type='checkbox' name='nom'
                        checked={busca.check.nom}
                        onChange={e => setState(e)}
                    />||
                </label>
                <label>
                    temperamento
                    <input type='checkbox' name='tem'
                        checked={busca.check.tem}
                        onChange={e => setState(e)}
                    />
                </label>

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