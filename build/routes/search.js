"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _WhatsAppBotController = _interopRequireDefault(require("../controllers/WhatsAppBotController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var botRouter = (0, _express.Router)();
botRouter.post('/incoming', _WhatsAppBotController.default.googleSearch);
var _default = botRouter;
exports.default = _default;
//# sourceMappingURL=search.js.map