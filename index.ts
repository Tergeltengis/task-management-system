import express from "express";

export const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to task management system");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
