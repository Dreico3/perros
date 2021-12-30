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
    })
    const setState = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    axios({
                        method: 'POST',
                        url: 'http://localhost:3001/registro',
                        data: {
                            name: inputs.name,
                            height: inputs.height,
                            weight: inputs.weight,
                            bred_for: inputs.bred_for,
                            life_span:parseInt(inputs.life_span),
                            image: inputs.image,
                            temperament:[2,4,5] //hardcode
                        }
                    })
                        .then(res => console.log(res))
                        .catch(e => console.log(e))
                }}>
                <label>
                    Nombre:
                    <input type="text" name="name"
                        onChange={e => setState(e)}
                    />
                </label>
                <br />
                <label>
                    altura:
                    <input type="text" name="height"
                        onChange={e => setState(e)}
                    />
                </label>
                <br />
                <label>
                    peso:
                    <input type="text" name="weight"
                        onChange={e => setState(e)}
                    />
                </label>
                <br />
                <label>
                    criado para:
                    <input type="text" name="bred_for"
                        onChange={e => setState(e)}
                    />
                </label>
                <br />
                <label>
                    esperanza de vida:
                    <input type="text" name="life_span"
                        onChange={e => setState(e)}
                    />
                </label>
                <br />
                <label>
                    url de la foto:
                    <input type="text" name="image"
                        onChange={e => setState(e)}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}