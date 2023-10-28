"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _About = require("./components/About");
var _CustomizedTimeline = _interopRequireDefault(require("./components/CustomizedTimeline"));
var _Navbar = _interopRequireDefault(require("./components/Navbar"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var darkTheme = (0, _styles.createTheme)({
  palette: {
    mode: 'dark',
    background: {
      paper: '#000000'
    }
  }
});
var lightTheme = (0, _styles.createTheme)({});
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_styles.ThemeProvider, {
    theme: darkTheme
  }, /*#__PURE__*/React.createElement(_material.Paper, null, /*#__PURE__*/React.createElement(_Navbar.default, null), /*#__PURE__*/React.createElement(_About.About, null), /*#__PURE__*/React.createElement(_CustomizedTimeline.default, null))));
}
var _default = exports.default = App;