const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
