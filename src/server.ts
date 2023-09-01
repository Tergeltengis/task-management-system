import { app } from "./app";
import { connect, connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

connect(uri);

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
