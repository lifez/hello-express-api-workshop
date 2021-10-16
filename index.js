const express = require('express')
const db = require('./db')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    const returnValue = {
        "title": "Javascript Bonus",
        "description": "lorem ipsum"
    }
    res.json(returnValue)
})

app.get('/books', (req, res) => {
    const statement = db.prepare('SELECT * from books')
    const books = statement.all()
    console.log(req.ip)
    res.json(books)
})

app.get('/books/:id', (req, res) => {
    const { id } = req.params
    const statement = db.prepare(`SELECT * from books WHERE id = ${id}`)
    const book = statement.get()
    res.json(book)
})

app.patch('/books/:id', (req, res) => {
    const { id } = req.params
    const { description } = req.body

    const statement = db.prepare('UPDATE books SET description = ? WHERE id = ?')
    const info = statement.run(description, id)

    res.json(info)
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params

    const statement = db.prepare('DELETE from books WHERE id = ?')
    const info = statement.run(id)

    res.json(info)
})


app.post('/new', (req, res) => {
    // const title = req.body.title
    // const description = req.body.description

    const {title, description} = req.body
    const statement = db.prepare('INSERT INTO books (title, description) VALUES (?, ?)')
    const info = statement.run(title, description)
    res.json(info)
})

app.listen(port, () => {
    console.log(`Application Start at http://localhost:${port}`)
})

