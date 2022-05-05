import express from "express";
import { routerStudent } from "./routes/index.js";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(routerStudent);
app.get("/", (req, res) => {
  res.send("Error 404 | page not found");
});
app.listen(PORT, () => {
  console.clear();
  console.log("Api on", PORT);
});
