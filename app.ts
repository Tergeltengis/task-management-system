import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to task management system");
});

// get tasks
app.get("/tasks", (req, res) => {
  console.log("working ");
  res.send({ title: "test title", desc: "test desc" });
});
