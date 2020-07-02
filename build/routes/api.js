"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _search = _interopRequireDefault(require("./search"));

var _web = _interopRequireDefault(require("./web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import apiRouter from './api';
var v1Router = (0, _express.Router)();
v1Router.use('/api/v1', _search.default);
var _default = v1Router;
exports.default = _default;
//# sourceMappingURL=api.js.map