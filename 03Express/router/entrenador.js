const express = require('express');
const router = express.Router();
const Entrenador = require('../models/entrenador');

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayEntrenadorDB = await Entrenador.find();
        console.log(arrayEntrenadorDB);
        res.render("entrenador", { 
            arrayEntrenador: arrayEntrenadorDB
        })
    } catch (error) {
        console.error(error)
    }
})

//create
router.get('/crearEntrenador', (req, res) => {
    res.render('crearEntrenador'); //nueva vista que llamaremos Crear
 })

module.exports = router;