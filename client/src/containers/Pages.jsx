import React from 'react'
import Page from '../components/Page'
import { connect } from 'react-redux';
function Pages(props) {
    let cont = 0;
    let num=0;
    const [numero, setNumero] = React.useState(1);

    const Caja = () => {
        var contador = 4;
        return(()=>{
            contador++;
            if (contador>=4){
                contador=0;
                return true;
            }
            return false;
        })
    }
    
    let a = Caja();

    return (
        <div>
            {props.perros.state.map(p => {
                cont++;
                if (a()) {
                    num++;
                    cont=0;
                    return (
                        <input key={num} type='button' value={num} onClick={(e)=>setNumero(e.target.value)}/>
                    )
                }
                return true;
            })}
            <Page num={numero} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        perros: state
    }
}
export default connect(mapStateToProps, null)(Pages);