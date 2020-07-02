"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Session = require("../models/Session");

function _default(phone_no) {
  return (0, _Session.initializeSession)(phone_no);
}
//# sourceMappingURL=initializeSession.js.map