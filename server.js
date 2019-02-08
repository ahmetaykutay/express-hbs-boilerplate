const app = require('./app')
const http = require('http')

const port = process.env.PORT || 80

const server = http.createServer(app)

server.listen(port, () => console.log(`The app started at  http://localhost:${port}`))