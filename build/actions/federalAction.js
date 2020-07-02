"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFullName = exports.saveLoanTenor = exports.checkUserLoanAmount = exports.saveUserNetPay = exports.saveIppisNumber = exports.initialize = void 0;

var _Federal = require("../models/Federal");

var _Session = require("../models/Session");

var initialize = (phone_no, action, next_action, ippis, session_hash) => {
  (0, _Federal.initializeRequest)(phone_no, ippis, session_hash); // updateSessionCurrentAction(action);
  // updateSessionNextAction(next_action);
};

exports.initialize = initialize;

var saveIppisNumber = (phone_no, action, next_action, value, session_hash) => {
  (0, _Federal.updateRecord)(phone_no, action, value, session_hash);
};

exports.saveIppisNumber = saveIppisNumber;

var saveUserNetPay = (phone_no, action, next_action, value, session_hash) => {
  (0, _Federal.updateRecord)(phone_no, action, value, session_hash);
};

exports.saveUserNetPay = saveUserNetPay;

var checkUserLoanAmount = (phone_no, action, next_action, value, session_hash) => {
  (0, _Federal.updateRecord)(phone_no, action, value, session_hash);
};

exports.checkUserLoanAmount = checkUserLoanAmount;

var saveLoanTenor = (phone_no, action, next_action, value, session_hash) => {
  (0, _Federal.updateRecord)(phone_no, action, value, session_hash);
};

exports.saveLoanTenor = saveLoanTenor;

var saveFullName = (phone_no, action, next_action, value, session_hash) => {
  (0, _Federal.updateRecord)(phone_no, action, value, session_hash);
  (0, _Session.endSession)(phone_no, session_hash);
};

exports.saveFullName = saveFullName;
//# sourceMappingURL=federalAction.js.map