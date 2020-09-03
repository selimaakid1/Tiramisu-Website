const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

// Connect DB
const db = 'mongodb+srv://selima123:selima123@tiramisu.jibov.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    if (err) throw err
    console.log('Database connected!...')
})

app.use('/api/admin', require('./routes/admin'))
app.use('/api/authAdmin', require('./routes/authAdmin'))
app.use('/api/tiramisu', require('./routes/tiramisu'))
app.use('/api/user', require('./routes/user'))
app.use('/api/authUser', require('./routes/authUser'))
app.use('/api/authAdmin', require('./routes/authAdmin'))

app.listen(5000, (err) => {
    if (err) throw err
    console.log('Server is running on port 5000...')})