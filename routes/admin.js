const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = "secret"


const Admin = require('../models/Admin')

// Register Admin
router.post('/', [
    check('firstname', 'Please enter your FirstName').not().isEmpty(),
    check('lastname', 'Please enter your LasttName').not().isEmpty(),
    check('email', 'Please enter your Email').isEmail(),
    check('password', 'Password must be 6 or more characters').not().isEmpty().isLength({ min: 6 })
],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { firstname, lastname, email, password } = req.body

        Admin.findOne = ({ email })
            .then(admin => {
                if (admin) {
                    res.status(400).json({ msg: 'Admin already exists!!' })

                } else {
                    admin = new Admin({
                        firstname,
                        lastname,
                        email,
                        password
                    })
                
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(user.password, salt, (err, hashedPassword) => {
                        user.password = hashedPassword
                        user.save()

                        const payload = {
                            admin: {
                                id: admin.id
                            }
                        }
                        jwt.sign(payload, jwtSecret, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.json({ token })
                        })
                    })
                })


            }
        })
        .catch(err => console.log(err.message))
})
                module.exports = router