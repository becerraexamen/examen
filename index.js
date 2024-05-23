import express from "express";
import routesMain from "./app/routes/routes.main.js";
const app = express();

app.use(express.json());
app.use("/pago", routesMain)
app.listen(3000, () => {
    console.log("http://localhost:3000");
})