import React from 'react'
import Page from '../components/Page'
import { connect } from 'react-redux';

import './css/Pages.css'
function Pages(props) {
    // let cont = 0;
    let num = 0;
    const [numero, setNumero] = React.useState(1);

    const Caja = () => {
        var contador = 8;
        return (() => {
            contador++;
            if (contador >= 8) {
                contador = 0;
                return true;
            }
            return false;
        })
    }

    let a = Caja();

    return (
        <div className="pages">
            <div className='pages-botones'>
                {props.perros.state.map(p => {
                    // cont++;
                    if (a()) {
                        num++;
                        // cont=0;
                        return (
                            <input className='' key={num} type='button' value={num} onClick={(e) => setNumero(e.target.value)} />
                        )
                    }
                    return true;
                })}

            </div>
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