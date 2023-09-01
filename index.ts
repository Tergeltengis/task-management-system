import express from "express";

export const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to task management system");
});

// get tasks
app.get("/tasks", (req, res) => {
  console.log("working ");
  res.send({ title: "test title", desc: "test desc" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
