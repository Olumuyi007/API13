console.log('i am alive')
require('dotenv').config()
const subscribersRouter = require('./routes/subscribers')
const express = require ('express');
const mongoose = require ('mongoose')

const app = express()

app.use('/subscribers', subscribersRouter)
mongoose.connect(process.env.DATABASE_URL, {
useNewUrlParser: true, useUnifiedTopology : true
}). then(() =>{
    console.log('baba ti connect')
}).catch((err) => {
    console.log('baba ti jabo')
    console.log(err)
})
app.listen (3000, () => console.log('server has started'))