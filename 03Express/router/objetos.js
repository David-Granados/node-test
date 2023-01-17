const express = require('express');
const router = express.Router();
const Entrenador = require('../models/entrenador');

router.get('/', async (req, res) => {
    try {
        const arrayEntrenadorDB = await Entrenador.find();
        console.log(arrayEntrenadorDB);
        res.render("entrenador", { 
            arrayEntrenador: arrayEntrenadorDB
        })
    } catch (error) {
        console.error(error)
    }
})



module.exports = router;