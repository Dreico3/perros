const { Router } = require('express');
const Axios = require('axios')
const { Op, DataTypes } = require('sequelize');
const { Perro, Temperamento } = require('../models/Dog');
const { default: axios } = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/temperament', async (req, res) => {
    const temperamentos = await Temperamento.findAll()
    res.json(temperamentos);
})
router.get('/perro/:id', async (req, res) => {
    const { id } = req.params;
    const perro = await Perro.findByPk(id,
        {
            include: [{
                model: Temperamento,
                attributes: ['nombre'],
                through: {
                    attributes: []
                }
            }]
        }
    );
    res.json(perro);
})
router.get('/perro', async (req, res) => {
    const { name } = req.query;
    if (name) {
        const perros = await Perro.findAll({
            where: {
                name: {
                    [Op.substring]: name
                }
            }
        });
        res.json(perros);

    } else {
        const perros = await Perro.findAll({
            include: [{
                model: Temperamento,
                attributes: ['nombre'],
                through: {
                    attributes: []
                }
            }]
        });
        res.json(perros);

    }
})
router.get('/dogs', async (req, res) => {
    try {
        const {name}=req.query;
        if(name){
            const perros = await Perro.findAll({
                where: {
                    name: {
                        [Op.substring]: name
                    }
                }
            });
            var dogs = await Axios.get('https://api.thedogapi.com/v1/breeds');
            dogs=dogs.data.slice(0.40);
            var lista=[];
            for(let i=0;i<dogs.length;i++){
                if(dogs[i].name.includes(name)){
                    lista.push(dogs[i]);
                }
            }
            //console.log(lista);
            res.json(perros.concat(lista));
        }else{

            const perros = await Axios.get('https://api.thedogapi.com/v1/breeds')
            var dogs = perros.data.slice(0, 40);
            var dogsdb = await Perro.findAll({
                include: [{
                    model: Temperamento,
                    attributes: ['nombre'],
                    through: {
                        attributes:[]
                    }
                }
                ]
            })
            // dogsdb=JSON.stringify(dogsdb);
            dogs = dogs.concat(dogsdb);
            res.json(dogs);
        }

    } catch (err) {
        console.log(err);
        res.status(404).send('Not Found');
    }
})
router.get('/dogs/:id', async (req, res) => {
    try {
        const {id}=req.params; 
        if(id.length<4){
            
            console.log('entro por verdad');
            const perros = await Axios.get('https://api.thedogapi.com/v1/breeds')
            
            for (let i=0;i<perros.data.length;i++){
                if(perros.data[i].id===parseInt(id)){
                    res.json(perros.data[i]);
                    break;
                }
            }
        }else{
            var dogdb = await Perro.findByPk(id,{
                include: [{
                    model: Temperamento,
                    attributes: ['nombre'],
                    through: {
                        attributes:[]
                    }
                }
                ]
            })
            res.json(dogdb);
        }

    } catch (err) {
        console.log(err);
        res.status(404).send('Not Found');
    }
})

router.post('/registro', async (req, res) => {
    const { name, height, weight, life_span, temperament,image,bred_for } = req.body;

    try {
        const perro = await Perro.create({
            name,
            height,
            weight,
            life_span,
            image,
            bred_for
        })

        /*  const tempe = await Temperamento.create({
             nombre: 'buen chico'
         }) */
        try {
            perro.addTemperamento(temperament);
        } catch (e) {
            console.log('ubo un eror al agregar temperamento');
        }
        res.redirect('/perro');
    } catch (e) {
        res.status(404).send('error no se creo el perrro');
    }
});
module.exports = router;
