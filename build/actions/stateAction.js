"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFullName = exports.saveLoanTenor = exports.checkUserLoanAmount = exports.saveUserNetPay = exports.saveOracleNumber = exports.initialize = void 0;

var _State = require("../models/State");

var _Session = require("../models/Session");

var initialize = (phone_no, action, next_action, oracle, session_hash) => {
  (0, _State.initializeRequest)(phone_no, oracle, session_hash);
};

exports.initialize = initialize;

var saveOracleNumber = (phone_no, action, next_action, value, session_hash) => {
  (0, _State.updateRecord)(phone_no, action, value, session_hash);
};

exports.saveOracleNumber = saveOracleNumber;

var saveUserNetPay = (phone_no, action, next_action, value, session_hash) => {
  (0, _State.updateRecord)(phone_no, action, value, session_hash);
};

exports.saveUserNetPay = saveUserNetPay;

var checkUserLoanAmount = (phone_no, action, next_action, value, session_hash) => {
  (0, _State.updateRecord)(phone_no, action, value, session_hash);
};

exports.checkUserLoanAmount = checkUserLoanAmount;

var saveLoanTenor = (phone_no, action, next_action, value, session_hash) => {
  (0, _State.updateRecord)(phone_no, action, value, session_hash);
};

exports.saveLoanTenor = saveLoanTenor;

var saveFullName = (phone_no, action, next_action, value, session_hash) => {
  (0, _State.updateRecord)(phone_no, action, value, session_hash);
  (0, _Session.endSession)(phone_no, session_hash);
};

exports.saveFullName = saveFullName;
//# sourceMappingURL=stateAction.js.map