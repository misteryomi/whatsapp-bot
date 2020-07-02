"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var webRouter = (0, _express.Router)();
webRouter.get('/test', (req, res) => {
  res.render('test', {
    name: "Yomi"
  });
});
var _default = webRouter;
exports.default = _default;
//# sourceMappingURL=web.js.map