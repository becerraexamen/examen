"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _pagoController = require("../controller/pago.controller.js");
var routesMain = (0, _express.Router)();
routesMain.get("/", _pagoController.PagoController.getAll);
routesMain.get("/:id", _pagoController.PagoController.getById);
routesMain.post("/", _pagoController.PagoController.create);
routesMain.put("/:id", _pagoController.PagoController.update);
routesMain["delete"]("/:id", _pagoController.PagoController["delete"]);
var _default = exports["default"] = routesMain;