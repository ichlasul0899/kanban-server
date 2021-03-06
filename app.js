const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const router = require('./routes/')
const cors = require('cors')
const app = express()
const errorHandler = require('./midlewares/errorHandler')
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/', router)
app.use(errorHandler)
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))