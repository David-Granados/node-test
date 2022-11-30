var clock = require('./reloj')
var tula = new clock()
tula.on('tictac', ()=>{
    tula.theTime()
})