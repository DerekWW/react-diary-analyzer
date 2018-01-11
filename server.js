if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const app = express()

const PORT = process.env.PORT

app.disable('x-powered-by')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/', require('./routes'))

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})
