"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRecord = exports.initializeRequest = void 0;

var _db = _interopRequireDefault(require("../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initializeRequest = (phone_no, oracle_number, session_hash) => {
  var query = "INSERT into `private_requests` (phone_no, oracle_number, session_hash) VALUES ('" + phone_no + "', '" + oracle_number + "', '" + session_hash + "')";

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
};

exports.initializeRequest = initializeRequest;

var updateRecord = (phone_no, field, value, session_hash) => {
  var query = "UPDATE `private_requests` SET `" + field + "` = '" + value + "', `updated_at` = NOW() WHERE `phone_no` = '" + phone_no + "' AND session_hash = '" + session_hash + "'";

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

exports.updateRecord = updateRecord;
//# sourceMappingURL=Private.js.map