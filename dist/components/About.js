"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _personalImage = _interopRequireDefault(require("./personal-image.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var About = exports.About = function About() {
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      bgcolor: 'background.paper',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    maxWidth: '1200px',
    margin: "auto",
    sx: {
      bgcolor: 'background.paper'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 6,
    sx: {
      padding: 2,
      maxHeight: '500px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      p: 2,
      textAlign: 'left',
      maxHeight: '100%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _personalImage.default,
    alt: "Custom Icon",
    style: {
      width: '450px',
      height: '450px',
      objectFit: 'contain',
      margin: 'auto'
    }
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 6,
    sx: {
      padding: 2,
      maxHeight: '500px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      p: 2,
      textAlign: 'left',
      maxHeight: '100%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h5"
  }, "About"), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "p1",
    sx: {
      whiteSpace: 'pre-line'
    }
  }, /*#__PURE__*/_react.default.createElement("br", null), "I'm Pranchal Shah, a current Master's in Computer Science candidate at Northeastern University.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "My passion for software development grew when I discovered computer vision, robotics, and augmented reality. Seeing how these emerging technologies could transform design and manufacturing ignited my curiosity to learn more.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "I am actively seeking co-op opportunities with companies specializing in IoT, Augmented Reality, Computer Vision, and Robotics. I aspire to leverage my unique blend of computer science proficiency and domain knowledge to use software to solve problems.")))));
};