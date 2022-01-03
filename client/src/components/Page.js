import React from 'react';
import { connect } from 'react-redux';
import Card from './Card'
import './css/Page.css'
function Page(props) {
    var num = props.num;
    const [perros, setPerros] = React.useState([]);
    React.useEffect(() => {
        let fin = num * 8;
        let auxlist = [];
        for (let i = fin - 8; i < fin; i++) {
            if(props.perros.state[i]){
                auxlist.push(props.perros.state[i])
            }
        }
        setPerros(auxlist);
    }, [props.perros.state,num,props.perros.order])
    return (
        <div className='cajon'>
            {perros!==undefined ? perros.map(p => {
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
            }) : <h1>cargando</h1>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        perros: state
    }
}
export default connect(mapStateToProps, null)(Page);