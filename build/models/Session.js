"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endSession = exports.updateSessionCurrentAction = exports.updateSessionNextAction = exports.getUserSession = exports.initializeSession = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _db = _interopRequireDefault(require("../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var initializeSession = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (phone_no) {
    var session = yield getUserSession(phone_no);

    if (!session) {
      var session_hash = _crypto.default.randomBytes(20).toString('hex');

      var query = "INSERT into `sessions` (phone_no, session_hash) VALUES ('" + phone_no + "', '" + session_hash + "')";

      _db.default.query(query, (err, res) => {
        console.log({
          err,
          res
        }); // if(err) res.status(500).send(err);
        // res.status(200);

        if (err) {
          console.log(err);
          return false;
        }

        ;
        return true;
      });
    }
  });

  return function initializeSession(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.initializeSession = initializeSession;

var getUserSession = (phone_no, cb) => {
  var query = "SELECT * FROM `sessions` WHERE `phone_no` = '" + phone_no + "' AND `status` = 1 LIMIT 1";
  return new Promise(function (resolve, reject) {
    _db.default.query(query, (err, res) => {
      // console.log({err, res})
      if (err) {
        console.log(err);
        reject(err); // throw err;
      }

      ; // console.log(res[0].next_action, 'status');

      resolve(res[0]); // return res[0];      
    });
  });
};

exports.getUserSession = getUserSession;

var updateSessionNextAction = (phone_no, next_action) => {
  var query = "UPDATE `sessions` SET `next_action` = '" + next_action + "', `updated_at` = NOW() WHERE `phone_no` = '" + phone_no + "' and `status` = 1 ";

  _db.default.query(query, (err, res) => {
    // console.log({err, res})
    if (err) {
      console.log(err);
      return false;
    }

    ;
    return true;
  });
};

exports.updateSessionNextAction = updateSessionNextAction;

var updateSessionCurrentAction = (phone_no, current_action) => {
  var query = "UPDATE `sessions` SET `current_action` = '" + current_action + "', `updated_at` = NOW() WHERE `phone_no` = '" + phone_no + "' and `status` = 1 ";

  _db.default.query(query, (err, res) => {
    // console.log({err, res})
    if (err) {
      console.log(err);
      return false;
    }

    ;
    return true;
  });
};

exports.updateSessionCurrentAction = updateSessionCurrentAction;

var endSession = (phone_no, session_hash) => {
  var query = "UPDATE `sessions` SET `status` = 0, `updated_at` = NOW() WHERE `phone_no` = '" + phone_no + "' and `status` = 1 "; //and `session_hash` = '"+ session_hash +"'

  _db.default.query(query, (err, res) => {
    // console.log({err, res})
    if (err) {
      console.log(err);
      return false;
    }

    ;
    return true;
  });
};

exports.endSession = endSession;
//# sourceMappingURL=Session.js.map