"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _routesMain = _interopRequireDefault(require("./routes/routes.main.js"));
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use("/pago", _routesMain["default"]);
app.listen(3000, function () {
  console.log("http://localhost:3000");
});