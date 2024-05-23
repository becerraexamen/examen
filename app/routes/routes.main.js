import { Router } from "express";
import { PagoController } from "../controller/pago.controller.js";

const routesMain = Router();

routesMain.get("/", PagoController.getAll);
routesMain.get("/:id", PagoController.getById);
routesMain.delete("/:id", PagoController.delete);
export default routesMain;