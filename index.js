const express = require('express')
const db = require("./db.js")

const app = express()
const port = 3000

app.use(express.json())

app.post('/', (req, res) => {
  res.send(req.body)
})

app.post('/new', (req, res) => {
  const { title, description } = req.body
  const statement = db.prepare(`INSERT INTO books (title, description) VALUES (?, ?)`)
  const info = statement.run(title, description)
  res.json(info)
})

app.get('/', (_, res) => {
  const statement = db.prepare('SELECT * from books')
  const books = statement.all()
  res.json(books)
})

app.patch('/:bookId', (req, res) => {
  const { bookId } = req.params
  const { title } = req.body
  const statement = db.prepare('UPDATE books SET title = ? WHERE id = ?')
  const info = statement.run(title, bookId)
  res.json(info)
})

app.delete('/:bookId', (req, res) => {
  const { bookId } = req.params
  const statement = db.prepare('DELETE from books WHERE id = ?')
  const info = statement.run(bookId)
  res.json(info)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
