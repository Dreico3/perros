import React from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import "./css/InfoCard.css";
function InfoCard(props) {
    const [perro, setPerro] = React.useState({});
    var { id } = useParams();

    const temperament = (list) => {
        //Nota solo resivir los temperamentos
        var lista = [];
        for (let i = 0; i < list.length; i++) {
            lista.push(list[i].nombre);
        }
        return lista.toString();
    };

    React.useEffect(() => {
        const buscaPerro = (lista, id) => {
            for (let i = 0; i < lista.length; i++) {
                if (id.length < 4) {
                    if (lista[i].id === parseInt(id)) {
                        setPerro({
                            ...perro,
                            name: lista[i].name,
                            image: lista[i].image.url,
                            bred_for: lista[i].bred_for,
                            life_span: lista[i].life_span,
                            weight: `Imperial: ${lista[i].weight.imperial} Metrico: ${lista[i].weight.metric}`,
                            height: `Imperial: ${lista[i].height.imperial} Metrico: ${lista[i].height.metric}`,
                            temperament: lista[i].temperament,
                        });

                        return;
                    }
                } else {
                    if (lista[i].id === id) {
                        setPerro({
                            ...perro,
                            name: lista[i].name,
                            image: lista[i].image,
                            height: lista[i].height,
                            weight: lista[i].weight,
                            bred_for: lista[i].bred_for,
                            life_span: lista[i].life_span,
                            temperament: temperament(lista[i].temperamentos),
                        });
                        return;
                    }
                }
            }
        };

        buscaPerro(props.listaPerros.state, id);
    }, [props.listaPerros.state, id, perro]);

    return (
        <div className="infoCard">
            <div className="infoCard-contend">
                <h1>{perro.name}</h1>
                <img src={perro.image} alt="Alex? are you..??" height="300px" />
                <p>
                    <strong>Años de vida: </strong>
                    <span>{perro.life_span}</span>
                </p>
                <p>
                    <strong>Peso: </strong>
                    <span>{perro.weight}</span>
                </p>
                <p>
                    <strong>Altura: </strong>
                    <span>{perro.height}</span>
                </p>
                <p>
                    <strong>Criado para: </strong>
                    <span>{perro.bred_for}</span>
                </p>
                <p>
                    <strong>temperamentos: </strong>
                    <span>{perro.temperament}</span>
                </p>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        listaPerros: state,
    };
};
export default connect(mapStateToProps, null)(InfoCard);
