"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _privateAction = require("../../actions/privateAction");

var _default = [{
  action: "industry",
  message: 'You selected the *Lagos* option: \n\nWhat industry do you work?',
  feedback_type: 'input',
  actionService: _privateAction.initialize,
  next_action: "is_confirmed_staff"
}, {
  action: "is_confirmed_staff",
  message: "Are you a confirmed staff?",
  feedback_type: 'input',
  actionService: _privateAction.saveIndustry,
  previous_action: "industry",
  next_action: "full_name"
}, {
  action: "full_name",
  message: "Kindly confirm your name and surname:",
  feedback_type: 'input',
  actionService: _privateAction.saveIsConfirmed,
  previous_action: "is_confirmed_staff",
  next_action: "close_session"
}, {
  action: "close_session",
  message: "Thank you for reaching out. \n\n One of our relationship officers will get in touch with you shortly. Kindly have the following available: \nPayslip \nProof of ID ( National ID card/Drivers License/International Passport) \nBVN details \nPassport photograph. \n\nThank You.\n Do have a great day!"
}];
exports.default = _default;
//# sourceMappingURL=private.js.map