import React from "react";
import { useParams } from "react-router";
import { connect } from 'react-redux';
function InfoCard(props) {
  const [perro, setPerro] = React.useState({});
  var { id } = useParams();

  const temperament=(list)=>{
    //Nota solo resivir los temperamentos
    var lista=[];
    for(let i=0;i<list.length;i++){
      lista.push(list[i].nombre)
    }
    return lista.toString();
  }

  React.useEffect(() => {
    const buscaPerro = (lista, id) => {
      for (let i = 0; i < lista.length; i++) {
        if(id.length < 4){
          if (lista[i].id === parseInt(id)) {
            setPerro({
              ...perro,
              name: lista[i].name,
              image: lista[i].image.url,
              bred_for: lista[i].bred_for,
              life_span: lista[i].life_span,
              temperament: lista[i].temperament
            });
            return
          }
        }else{
          if (lista[i].id === id) {
            setPerro({
              ...perro,
              name: lista[i].name,
              image: lista[i].image,
              bred_for: lista[i].bred_for,
              life_span: lista[i].life_span,
              temperament: temperament(lista[i].temperamentos)
            });
            return
          }
        }
      }
    }
    buscaPerro(props.listaPerros.state, id);
  },[])
  
  return (
    <div>
      <h1>{perro.name}</h1>
      <img
        src={perro.image}
        alt="Alex? are you..??"
        height='300px'
      />
      <br />
      <span>Años de vida: {perro.life_span}</span>
      <br />
      <strong>Criado para : {perro.bred_for}</strong>
      <br />
      <strong>temperamentos : {perro.temperament}</strong>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    listaPerros: state
  }
}
export default connect(mapStateToProps, null)(InfoCard);
