const express = require("express");
const db = require("./db.js");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  //   response.json({
  //     title: "Good Code, Bad Code",
  //     description: "Book from manning",
  //   });
  response.send("<h1>Hello</h1>");
});

app.post("/", (request, response) => {
  //   const title = request.body.title;
  //   const description = request.body.description;
  const { title, owner } = request.body;

  const statement = db.prepare(
    "INSERT INTO models (title, owner) VALUES (?,?)"
  );

  const info = statement.run(title, description, publication);
  response.json(info);
});

app.get("/models", (request, response) => {
  const statement = db.prepare("SELECT * FROM models");
  const info = statement.all();
  response.json(info);
});

app.get("/models/:id", (request, response) => {
  //   const id = request.params.id;
  const { id } = request.params;

  const statement = db.prepare(`SELECT * FROM models WHERE id = ${id}`);
  const info = statement.get();

  response.json(info);
});


app.patch("/models/:id", (request, response) => {
  const { id } = request.params;
  const { title } = request.body;

  const statement = db.prepare("UPDATE models SET title = ? WHERE id = ?");
  const info = statement.run(title, id);

  response.json(info);
});

app.delete("/models/:id", (request, response) => {
  const { id } = request.params;

  const statement = db.prepare("DELETE from models WHERE id = ?");
  const info = statement.run(id);

  response.json(info);
});

app.listen(3000, () => {
  console.log("Application start at http://localhost:3000");
});
