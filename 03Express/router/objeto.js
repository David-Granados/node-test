const express = require('express');
const router = express.Router();
const Objeto = require('../models/objeto');

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayObjetoDB = await Objeto.find();
        console.log(arrayObjetoDB);
        res.render("objeto", { 
            arrayObjeto: arrayObjetoDB
        })
    } catch (error) {
        console.error(error)
    }
})

//create
router.get('/crearObjeto', (req, res) => {
    res.render('crearObjeto'); //nueva vista que llamaremos Crear
 })
   router.post('/', async (req, res) => {
       const body = req.body //Gracias al body parser, de esta forma
       //podremos recuperar todo lo que viene del body
       console.log(body) //Para comprobarlo por pantalla
       try {
           const objetoDB = new Objeto(body)
           await objetoDB.save()
           res.redirect('/objeto') //Volvemos al listado
       } catch (error) {
           console.log('error', error)
       }
   })

 //view
 router.get('/:id', async(req, res) => { 
    const id = req.params.id
    try {
        const objetoDB = await Objeto.findOne({ _id: id })
        console.log(objetoDB)
        res.render('detalleObjeto', { 
            objeto: objetoDB,
            error: false
        })
    } catch (error) {
        console.log('Se ha producido un error', error)
        res.render('detalleObjeto', {
            error: true,
            mensaje: 'Objeto no encontrado!'
        })
    }
})
//delete
router.delete('/:id', async (req, res) => {
   const id = req.params.id;
   console.log('id desde backend', id)
   try {
       const objetoDB = await Objeto.findByIdAndDelete({ _id: id });
       console.log(objetoDB)
       if (!objetoDB) {
           res.json({ 
               estado: false,
               mensaje: 'No se puede eliminar el objeto.'
           })
       } else {
           res.json({
               estado: true,
               mensaje: 'Objeto eliminado.'
           })
       } 
   } catch (error) {
       console.log(error)
   }
})
//update
router.put('/:id', async (req, res) => {
   const id = req.params.id;
   const body = req.body;
   console.log(id)
   console.log('body', body)
   try {
       const objetoDB = await Objeto.findByIdAndUpdate(
           id, body, { useFindAndModify: false }
       )
       console.log(objetoDB)
       res.json({
           estado: true,
           mensaje: 'Objeto editado'
       })
   } catch (error) {
       console.log(error)
       res.json({
           estado: false,
           mensaje: 'Problema al editar el Objeto'
       })
   }
})


module.exports = router;