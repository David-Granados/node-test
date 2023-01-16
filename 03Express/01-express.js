const express = require('express')
const app = express()
const port = 3005
//conection mongoose
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales
const user = 'cursonode';
const password = 'w2Ko4l6r8BJGAtER';
const dbname = 'dbpokemon';
const uri = `mongodb+srv://${user}:${password}@cluster0.pwelxvd.mongodb.net/${dbname}?retryWrites=true&w=majority`; //URL de conexión, que completaremos luego
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))




//middleware
app.use(express.static(__dirname + '/public'))

//Motor de plantilla
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use('/', require('./router/rutas'))
app.use('/pokemon', require('./router/pokemon'))

//Listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Error controller
app.use((req, res) => {
  res.status(404).render("404", {
    titulo: "Error 404",
    descripcion: "Page not found"
  })
})