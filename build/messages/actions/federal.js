"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _federal = _interopRequireDefault(require("../messageTexts/federal"));

var _federalAction = require("../../actions/federalAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  action: "ippis_number",
  message: 'You selected the *Federal* option: \n\n Kindly input your IPPIS number:',
  feedback_type: 'input',
  // 'options',
  actionService: _federalAction.initialize,
  next_action: "net_pay"
}, {
  action: "net_pay",
  message: "What is your average monthly net pay?",
  feedback_type: 'input',
  actionService: _federalAction.saveIppisNumber,
  previous_action: "ippis_number",
  next_action: "loan_amount"
}, {
  action: "loan_amount",
  message: "How much do you need as loan?",
  feedback_type: 'input',
  actionService: _federalAction.saveUserNetPay,
  previous_action: "net_pay",
  next_action: "loan_tenor"
}, {
  action: "loan_tenor",
  message: "Loan tenor (maximum tenor is 18 months)",
  feedback_type: 'input',
  actionService: _federalAction.checkUserLoanAmount,
  previous_action: "loan_amount",
  next_action: "full_name"
}, {
  action: "full_name",
  message: "Kindly confirm your name and surname:",
  feedback_type: 'input',
  actionService: _federalAction.saveLoanTenor,
  previous_action: "loan_tenor",
  next_action: "close_session"
}, {
  action: "close_session",
  actionService: _federalAction.saveFullName,
  previous_action: "full_name",
  message: "Thank you for reaching out. \n\nOne of our relationship officers will get in touch with you shortly. \n\nDo have a great day!"
}];
exports.default = _default;
//# sourceMappingURL=federal.js.map