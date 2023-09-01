import { app } from "./app";
import { connect, connection } from "mongoose";

const port = 3000;
const uri = "mongodb://localhost:27017";

connect(uri);

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
