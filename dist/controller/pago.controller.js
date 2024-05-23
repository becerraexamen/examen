"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagoController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _db = require("../config/db.js");
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var PagoController = exports.PagoController = /*#__PURE__*/(0, _createClass2["default"])(function PagoController() {
  (0, _classCallCheck2["default"])(this, PagoController);
});
(0, _defineProperty2["default"])(PagoController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _yield$pool$query, _yield$pool$query2, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _db.pool.query("SELECT * FROM pago");
        case 3:
          _yield$pool$query = _context.sent;
          _yield$pool$query2 = (0, _slicedToArray2["default"])(_yield$pool$query, 1);
          result = _yield$pool$query2[0];
          res.status(200).json(result);
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          res.status(404).json({
            error: _context.t0
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(PagoController, "getById", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _yield$pool$query3, _yield$pool$query4, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return _db.pool.query("SELECT * FROM pago WHERE id = ? ", [id]);
        case 4:
          _yield$pool$query3 = _context2.sent;
          _yield$pool$query4 = (0, _slicedToArray2["default"])(_yield$pool$query3, 1);
          result = _yield$pool$query4[0];
          if (result.length === 0) {
            res.status(404).json({
              error: "Pago no encontrado"
            });
          } else {
            res.status(200).json(result);
          }
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            error: _context2.t0
          });
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(PagoController, "create", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var input, valor, _yield$pool$query5, _yield$pool$query6, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          input = req.body;
          valor = input.valor;
          _context3.prev = 2;
          _context3.next = 5;
          return _db.pool.query("INSERT INTO `pago`(`valor`) VALUES (?)", [valor]);
        case 5:
          _yield$pool$query5 = _context3.sent;
          _yield$pool$query6 = (0, _slicedToArray2["default"])(_yield$pool$query5, 1);
          result = _yield$pool$query6[0];
          if (result.affectedRows === 0) {
            res.status(400).json({
              error: "Error en la inserción"
            });
          } else {
            res.status(201).json(result);
          }
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          res.status(500).json({
            error: _context3.t0
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(PagoController, "update", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, input, valor, _yield$pool$query7, _yield$pool$query8, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          input = req.body;
          valor = input.valor;
          _context4.prev = 3;
          _context4.next = 6;
          return _db.pool.query("UPDATE `pago` SET `valor`='?' WHERE id = ?", [valor, id]);
        case 6:
          _yield$pool$query7 = _context4.sent;
          _yield$pool$query8 = (0, _slicedToArray2["default"])(_yield$pool$query7, 1);
          result = _yield$pool$query8[0];
          if (result.affectedRows === 0) {
            res.status(400).json({
              error: "Error en la inserción"
            });
          } else {
            res.status(201).json({
              message: "Pago modificado"
            });
          }
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](3);
          res.status(500).json({
            error: _context4.t0
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 12]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(PagoController, "delete", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _yield$pool$query9, _yield$pool$query10, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _db.pool.query("DELETE FROM `pago` WHERE id = ?", [id]);
        case 4:
          _yield$pool$query9 = _context5.sent;
          _yield$pool$query10 = (0, _slicedToArray2["default"])(_yield$pool$query9, 1);
          result = _yield$pool$query10[0];
          if (result.affectedRows === 0) {
            res.status(404).json({
              error: "Error al eliminar pago"
            });
          } else {
            res.status(200).json({
              respuesta: "Pago Eliminado Correctamente"
            });
          }
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            error: _context5.t0
          });
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());