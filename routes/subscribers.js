const express = require('express')
const router = express.Router()

// getting all
//getting one
//create one
//update one
//delete one

router.get('/', (req,res) => {
res.send('Hello World')
})

// getting one
router.get('/', (req, res) => {
    res.send('Hello one')
})

// create one
router.post('/', (req, res) =>{

})

//update one
router.patch('/:id', (req, res) => {

})

//delete one
router.delete ('/:id', (req, res)=> {

})
module.exports = router