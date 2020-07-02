"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var {
  DB_HOST: host,
  DB_DATABASE: database,
  DB_USER: user,
  DB_PASSWORD: password
} = process.env;

var db = _mysql.default.createConnection({
  host,
  user,
  password,
  database
});

console.log({
  host,
  user,
  password,
  database
}); // db.connect(err => {
//     if(err) throw err;
//     console.log('connected to db');
// })

var _default = db;
exports.default = _default;
//# sourceMappingURL=db.js.map