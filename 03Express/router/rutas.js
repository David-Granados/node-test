const express = require('express') //Requerimos Express
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", { titulo: "Bienvenido al mundo pokemon"})
})

// router.get('/contacto', (req, res) => {
//     res.render("contacto", { tituloContacto: "Estamos en contacto de manera dinámica!!"})
// })

// Por último, vamos a exportarlo:
module.exports = router;
