"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _messageTexts = require("./messageTexts");

var _actions = require("./actions");

var _initializeSession = _interopRequireDefault(require("../actions/initializeSession"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  keywords: ['hi', 'hello', "good morning", "good afternoon", "good evening", 'home'],
  message: _messageTexts.welcomeText,
  initial_intent: 'welcome',
  initial_action: _initializeSession.default
}, {
  keywords: ['1'],
  message: _messageTexts.loanText,
  sub: [{
    keywords: ['federal', '1'],
    // message: federalText,
    action: _actions.federalAction,
    intent: 'ippis_number'
  }, {
    keywords: ['state', 'lagos', '2'],
    // message: stateText,
    action: _actions.stateAction,
    intent: 'check_oracle'
  }, // {
  //     keywords: ['lagos'],
  //     message: stateAction,
  //     action: stateAction,
  //     intent: 'check_oracle'
  // },
  {
    keywords: ['private', '3'],
    action: _actions.privateAction,
    intent: 'check_location'
  }, {
    keywords: ['sme', '4'],
    message: _messageTexts.smeText,
    type: 'input',
    input_type: 'ippis'
  }, {
    keywords: ['others', 'other', '5'],
    message: _messageTexts.othersText,
    type: 'input',
    input_type: 'ippis'
  }],
  initial_intent: 'loan'
}, {
  keywords: ['2'],
  message: _messageTexts.fixedDepositText,
  initial_intent: 'fixed_deposit' // is_welcome: true,

}, {
  keywords: ['3'],
  message: _messageTexts.savingsText,
  initial_intent: 'savings' // is_welcome: true

}, {
  keywords: ['4'],
  message: _messageTexts.complaintText,
  initial_intent: 'complaint' // is_welcome: true

}];
exports.default = _default;
//# sourceMappingURL=feedbacks.js.map