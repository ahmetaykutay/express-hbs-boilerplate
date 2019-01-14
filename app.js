const express = require('express')
const app = express()
const path = require('path')
const hbs = require('express-handlebars')

const viewRoutes = require('./routes')
const apiRoutes = require('./api')

app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutDir: __dirname + '/views/layouts/'
  })
)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/api', apiRoutes)
app.use('/public', express.static('public'))
app.use('/', viewRoutes)

module.exports = app
