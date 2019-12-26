const express = require('./config/express')
const app = express()
const port = 8900



app.listen(port,()=> console.log(`Server On ${port}`))