
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')





mongoose.connect(config.db, (error,res)=>{
    if (error)throw error
    console.log('data base connection: true '+config.db)

    app.listen(config.port, ()=>{
        console.log(`API REST run in http://localhost:${config.port}`)
    })
})


