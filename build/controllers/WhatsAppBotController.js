"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _twilio = _interopRequireDefault(require("twilio"));

var _feedbacks = _interopRequireDefault(require("../messages/feedbacks"));

var _default2 = _interopRequireDefault(require("../messages/default"));

var _Session = require("../models/Session");

var _messageTexts = require("../messages/messageTexts");

var _initializeSession = _interopRequireDefault(require("../actions/initializeSession"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var {
  SID: accountSid,
  KEY: TwilioAuthToken,
  APIKEY: googleApiKey,
  CX: cx,
  APP_ENV: environment
} = process.env; // var next_action;

var action_feedbacks;
var feedback;
var count;
var active_intent = '';
(0, _twilio.default)(accountSid, TwilioAuthToken);
var {
  MessagingResponse
} = _twilio.default.twiml;

function getFeedback(keyword, phone) {
  var response = {
    message: "Sorry, we could not catch that. \n\n".concat(_messageTexts.welcomeText),
    initial_intent: 'welcome'
  }; // console.log({active_intent});

  for (var i = 0; i <= _feedbacks.default.length; i++) {
    var _feedback2 = _feedbacks.default[i]; // console.log(feedback);
    // feedbacks.forEach((feedback) => {

    if (active_intent == 'loan' && _feedback2.sub && _feedback2.sub.length > 0) {
      var sub = _feedback2.sub.filter(f => {
        // console.log(f.keywords.includes(keyword.toLowerCase()), f.keywords)
        return f.keywords.includes(keyword.toLowerCase());
      })[0];

      if (sub) {
        response = sub;
      }

      break; // return;
    } else {
      if (_feedback2 && _feedback2.keywords.includes(keyword.toLowerCase())) {
        // console.log('checking here tooo?')
        response = _feedback2;
        break; // return;
      }
    }
  } //)


  console.log({
    response
  });

  if (response.initial_intent) {
    //update with the current initial intent
    active_intent = response.initial_intent;
  }

  if (response.initial_action) {
    response.initial_action(phone);
  }

  return response; // return response ? response.message : defaultMessage;
}

function getActionFeedback(_feedback, action, q, phone, session_hash) {
  console.log({
    _feedback
  }); //    console.log('checking oooo', _feedback, next_action, action, last_opt);
  // console.log('action', action, count,last_opt)

  var response;

  if (_feedback.action && Array.isArray(_feedback.action)) {
    response = _feedback.action.filter(fb => {
      // let ac = fb.action ? fb.action : fb;
      // console.log({ac}, action);
      // console.log('act=>', ac == action && action)
      return fb.action == action;
    })[0];
  } else {
    response = _feedback.filter(fb => fb.action == action)[0]; // console.log(response, 'action');
  }

  if (response.actionService) {
    console.log(response);
    response.actionService(phone, response.previous_action, response.next_action, q, session_hash);
  }

  (0, _Session.updateSessionCurrentAction)(phone, response.action);
  (0, _Session.updateSessionNextAction)(phone, response.next_action); // console.log('action_response', response);
  // console.log('new resp', q, next_action, response)

  return response; // next_action = response.next_action
}

class WhatsAppBot {
  static googleSearch(req, res, next) {
    return _asyncToGenerator(function* () {
      console.log(req.body);
      var twiml = new MessagingResponse();
      var q = req.body.Body;
      var phone = req.body.From ? req.body.From.replace('whatsapp:', '') : null;
      var options = {
        cx,
        q,
        auth: googleApiKey
      };

      try {
        var response;

        var _feedback3;

        var next_action;
        var session = yield (0, _Session.getUserSession)(phone);

        if (!session || !action_feedbacks) {
          yield (0, _Session.endSession)(phone); //end previous sessions

          yield (0, _initializeSession.default)(phone);
          session = yield (0, _Session.getUserSession)(phone);
          console.log('new session');
        }

        console.log({
          session
        });

        if (session.next_action || session.next_action !== 'undefined') {
          next_action = session.next_action;
        }

        console.log({
          next_action
        });

        if (next_action) {
          _feedback3 = getActionFeedback(action_feedbacks, next_action, q, phone, session.session_hash);
          console.log({
            feedback: _feedback3
          }); // next_action = feedback.next_action;

          (0, _Session.updateSessionNextAction)(_feedback3.next_action);
        } else {
          _feedback3 = getFeedback(q, phone); // console.log({feedback})

          if (_feedback3.action) {
            action_feedbacks = _feedback3.action;
          }
        }

        if (_feedback3.intent) {
          response = getActionFeedback(_feedback3, _feedback3.intent, q, phone, session.session_hash); // next_action = response.next_action

          (0, _Session.updateSessionNextAction)(_feedback3.next_action); // console.log({response});
        } else {
          response = _feedback3; // console.log('backup response', response.message)
        }

        var message = "".concat(response ? response.message : _default2.default);
        count++;

        if (environment == 'production') {
          twiml.message("".concat(message));
          console.log(message);
          res.set('Content-Type', 'text/xml');
          return res.status(200).send(twiml.toString());
        } else {
          res.set('Content-Type', 'application/json');
          return res.status(200).send({
            message
          });
        } // let next_action = getUserSession(phone).next_action;
        // console.log({next_action});

      } catch (error) {
        console.log({
          error
        });
        return next(error);
      }
    })();
  }

}

var _default = WhatsAppBot;
exports.default = _default;
//# sourceMappingURL=WhatsAppBotController.js.map