const express = require('express')
const router = express.Router()
const auth = require('../middleware/authAdmin')
const Tiramisu = require('../models/Tiramisu')
const { check, validationResult } = require('express-validator');

// Get tiramisu
router.get('/', auth, (req,res) => {
    Tiramisu.find({
        admin: req.admin.id
    }).sort({date: -1}).then(tiramisu => res.json(tiramisu))
    .catch(err => console.log(err.message))

})

// Add tiramisù
router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty()
]],
(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { name, description, price} = req.body
    const newTiramisu = new Tiramisu({
        name,
        description,
        price,
        admin: req.admin.id
    })
    newTiramisu.save()
    .then((tiramisu) => res.json(tiramisu))
    .catch(err => console.log(err.message))
})


// Delete tiramisu
router.delete('/:id', auth, (req,res) => {
    Tiramisu.findById(req.params.id)
    .then(tiramisu => {
        if (!tiramisu){
            return res.json({ msg: 'tiramisu not found!'})
        }else if (tiramisu.admin.toString() !== req.admin.id){
            res.json({ msg: "not authorized" })

        }else {
            Tiramisu.findByIdAndDelete(req.params.id, (err, data) => {
                res.json({ msg: "Tiramisu has been Deleted" })

            })
        }
    })
    .catch(err => console.log(err.message))

})

// Update tiramisu
router.put/'/:id', auth, (req, res) => {
    const { name, description, price} = req.body
    let tiramisuFields = {}
    if (name) tiramisuFields.name = name
    if (description) tiramisuFields.description = description
    if (price) tiramisuFields.price = price
    Tiramisu.findById(req.params.id)
    .then(tiramisu => {
        if(!tiramisu){
            return res.json({ msg: 'tiramisu not found!'})
        }else if (tiramisu.admin.toString() !== req.admin.id){
            res.json({ msg: "not authorized" })

        }else {
            Tiramisu.findByIdAndUpdate(req.params.id, {$set: tiramisuFields}, (err, data) => {
                res.json({ msg: 'Tiramisu has been updated!'})
            })
        }
    })
    .catch(err => console.log(err.message))


}   

module.exports = router