import React from "react";
import axios from "axios";
export default function Form() {
    const [inputs, setInputs] = React.useState({
        name: '',
        height: '',
        weight: '',
        bred_for: '',
        life_span: '',
        image: '',
        check: {
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
            cinco: false,
            seis: false,
        }
    })
    const setState = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        if (e.target.type !== 'checkbox') {
            setInputs({
                ...inputs,
                [e.target.name]: value
            })
        } else {
            setInputs({
                ...inputs,
                check: {
                    ...inputs.check,
                    [e.target.name]: value
                }
            })
        }
    }
    const temperament = (temperamentos) => {
        let aux = [];
        let cont = 1;
        for (const i in temperamentos) {
            console.log(temperamentos[i])
            if (temperamentos[i]) {
                aux.push(cont);
            }
            cont++;
        }

        return aux;
    }
    /* React.useEffect(() => {

        console.log('hola')
        let as = temperament(inputs.check)
        console.log('esto tiene q ser un array');
        console.log(as);

    }, [inputs.check]); */

    /*  */
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    console.log(inputs)
                    axios({
                        method: 'POST',
                        url: 'http://localhost:3001/registro',
                        data: {
                            name: inputs.name,
                            height: inputs.height,
                            weight: inputs.weight,
                            bred_for: inputs.bred_for,
                            life_span: parseInt(inputs.life_span),
                            image: inputs.image,
                            temperament: temperament(inputs.check) //hardcode
                        }
                    })
                        .then(res => console.log(res))
                        .catch(e => console.log(e))

                    setInputs({
                        ...inputs,
                        name: '',
                        height: '',
                        weight: '',
                        bred_for: '',
                        life_span: '',
                        image: '',
                        check: {
                            uno: false,
                            dos: false,
                            tres: false,
                            cuatro: false,
                            cinco: false,
                            seis: false,
                        }
                    })
                    console.log(inputs)
                }}>
                <label>
                    Nombre:
                    <input type="text" name="name"
                        onChange={e => setState(e)}
                        placeholder="Articus"
                        value={inputs.name}
                    />
                </label>
                <br />
                <label>
                    altura:
                    <input type="text" name="height"
                        onChange={e => setState(e)}
                        placeholder="42 - 45 cm"
                        value={inputs.height}
                    />
                </label>
                <br />
                <label>
                    peso:
                    <input type="text" name="weight"
                        onChange={e => setState(e)}
                        placeholder="25 - 27 kg"
                        value={inputs.weight}
                    />
                </label>
                <br />
                <label>
                    criado para:
                    <input type="text" name="bred_for"
                        onChange={e => setState(e)}
                        placeholder="correr feliz"
                        value={inputs.bred_for}
                    />
                </label>
                <br />
                <label>
                    esperanza de vida:
                    <input type="text" name="life_span"
                        onChange={e => setState(e)}
                        placeholder="13"
                        value={inputs.life_span}
                    />
                </label>
                <br />
                <label>
                    url de la foto:
                    <input type="text" name="image"
                        onChange={e => setState(e)}
                        placeholder="https://images.net/72548519.jpg"
                        value={inputs.image}
                    />
                </label>
                <div>
                    <h3>Temperamentos</h3>
                    <label>
                        facil de adiestrar
                        <input type='checkbox' name='uno'
                            checked={inputs.check.uno}
                            onChange={e => setState(e)}

                        />
                    </label>
                    <label>
                        dificil de adiestrar
                        <input type='checkbox' name='dos'
                            checked={inputs.check.dos}
                            onChange={e => setState(e)}
                        />
                    </label>
                    <label>
                        amigable
                        <input type='checkbox' name='tres'
                            checked={inputs.check.tres}
                            onChange={e => setState(e)}
                        />
                    </label>
                    <label>
                        jugueton
                        <input type='checkbox' name='cuatro'
                            checked={inputs.check.cuatro}
                            onChange={e => setState(e)}
                        />
                    </label>
                    <label>
                        dominante
                        <input type='checkbox' name='cinco'
                            checked={inputs.check.cinco}
                            onChange={e => setState(e)}
                        />
                    </label>
                    <label>
                        tanquilo
                        <input type='checkbox' name='seis'
                            checked={inputs.check.seis}
                            onChange={e => setState(e)}
                        />
                    </label>
                    <br />
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}