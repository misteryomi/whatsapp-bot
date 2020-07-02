"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = require("./routes");

var _mustacheExpress = _interopRequireDefault(require("mustache-express"));

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT || 3005;
global.db = _db.default;
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use(_routes.v1Routes);
app.use(_routes.webRoutes);
app.engine('html', (0, _mustacheExpress.default)());
app.set('view engine', 'html');
app.set('views', __dirname + '/../views');
app.use(_express.default.static('/public')); //404 error handler

app.use((req, res, next) => {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: {
      message: err.message
    }
  });
});
app.listen(PORT, () => console.log("App listening on port ".concat(PORT)));
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map