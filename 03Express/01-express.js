const express = require('express')
const app = express()
const port = 3005

//middleware
app.use(express.static(__dirname+'/public'))

//Motor de plantilla
app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.use('/',require('./router/rutas'))
app.use('/pokemon',require('./router/pokemon'))

//Listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Error controller
app.use((req, res) => {
    res.status(404).render("404",{
        titulo: "Error 404",
        descripcion: "Page not found"
    })
})