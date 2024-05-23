import { Router } from "express";
import { PagoController } from "../controller/pago.controller.js";

const routesMain = Router();

routesMain.get("/", PagoController.getAll);
routesMain.get("/:id", PagoController.getById);
routesMain.post("/", PagoController.create)
routesMain.put("/:id", PagoController.update)
routesMain.delete("/:id", PagoController.delete);
export default routesMain;