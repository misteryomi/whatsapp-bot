"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveIsConfirmed = exports.saveIndustry = exports.initialize = void 0;

var _Private = require("../models/Private");

var _Session = require("../models/Session");

var initialize = (phone_no, action, next_action, oracle, session_hash) => {
  (0, _Private.initializeRequest)(phone_no, oracle, session_hash);
};

exports.initialize = initialize;

var saveIndustry = (phone_no, action, next_action, value, session_hash) => {
  (0, _Private.updateRecord)(phone_no, action, value, session_hash);
};

exports.saveIndustry = saveIndustry;

var saveIsConfirmed = (phone_no, action, next_action, value, session_hash) => {
  (0, _Private.updateRecord)(phone_no, action, value, session_hash);
  (0, _Session.endSession)(phone_no, session_hash);
};

exports.saveIsConfirmed = saveIsConfirmed;
//# sourceMappingURL=privateAction.js.map