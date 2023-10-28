"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomizedTimeline;
var React = _interopRequireWildcard(require("react"));
var _Timeline = _interopRequireDefault(require("@mui/lab/Timeline"));
var _TimelineItem = _interopRequireDefault(require("@mui/lab/TimelineItem"));
var _TimelineSeparator = _interopRequireDefault(require("@mui/lab/TimelineSeparator"));
var _TimelineConnector = _interopRequireDefault(require("@mui/lab/TimelineConnector"));
var _TimelineContent = _interopRequireDefault(require("@mui/lab/TimelineContent"));
var _TimelineOppositeContent = _interopRequireDefault(require("@mui/lab/TimelineOppositeContent"));
var _TimelineDot = _interopRequireDefault(require("@mui/lab/TimelineDot"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _School = _interopRequireDefault(require("@mui/icons-material/School"));
var _HarvardLogo = _interopRequireDefault(require("./Harvard-logo.png"));
var _NortheasternLogo = _interopRequireDefault(require("./Northeastern-logo.png"));
var _cSharp = _interopRequireDefault(require("./c-sharp.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function CustomizedTimeline() {
  return /*#__PURE__*/React.createElement(_Timeline.default, {
    position: "alternate",
    sx: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(_TimelineItem.default, null, /*#__PURE__*/React.createElement(_TimelineOppositeContent.default, {
    sx: {
      m: 'auto 0'
    },
    variant: "body2",
    color: "text.secondary"
  }, "2019-2022 "), /*#__PURE__*/React.createElement(_TimelineSeparator.default, null, /*#__PURE__*/React.createElement(_TimelineConnector.default, null), /*#__PURE__*/React.createElement(_TimelineDot.default, {
    sx: {
      backgroundColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _cSharp.default,
    alt: "Custom Icon",
    style: {
      width: '90px',
      height: '100px'
    }
  })), /*#__PURE__*/React.createElement(_TimelineConnector.default, null)), /*#__PURE__*/React.createElement(_TimelineContent.default, {
    sx: {
      py: '50px',
      px: 2
    }
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h6",
    component: "span"
  }, "Computational Designer "), /*#__PURE__*/React.createElement(_Typography.default, null, "VastuShilpa Consultants"))), /*#__PURE__*/React.createElement(_TimelineItem.default, null, /*#__PURE__*/React.createElement(_TimelineOppositeContent.default, {
    sx: {
      m: 'auto 0'
    },
    variant: "body2",
    color: "text.secondary"
  }, "2022 "), /*#__PURE__*/React.createElement(_TimelineSeparator.default, null, /*#__PURE__*/React.createElement(_TimelineConnector.default, null), /*#__PURE__*/React.createElement(_TimelineDot.default, {
    sx: {
      backgroundColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _HarvardLogo.default,
    alt: "Custom Icon",
    style: {
      width: '100px',
      height: '90px'
    }
  })), /*#__PURE__*/React.createElement(_TimelineConnector.default, null)), /*#__PURE__*/React.createElement(_TimelineContent.default, {
    sx: {
      py: '50px',
      px: 2
    }
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h6",
    component: "span"
  }, "Harvard University "), /*#__PURE__*/React.createElement(_Typography.default, null, "MS - Computational Design"), /*#__PURE__*/React.createElement(_Typography.default, null, "Dropped Out"))), /*#__PURE__*/React.createElement(_TimelineItem.default, null, /*#__PURE__*/React.createElement(_TimelineOppositeContent.default, {
    sx: {
      m: 'auto 0'
    },
    variant: "body2",
    color: "text.secondary"
  }, "2023 - 2025"), /*#__PURE__*/React.createElement(_TimelineSeparator.default, null, /*#__PURE__*/React.createElement(_TimelineConnector.default, null), /*#__PURE__*/React.createElement(_TimelineDot.default, {
    sx: {
      backgroundColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _NortheasternLogo.default,
    alt: "Custom Icon",
    style: {
      width: '100px',
      height: '100px'
    }
  })), /*#__PURE__*/React.createElement(_TimelineConnector.default, null)), /*#__PURE__*/React.createElement(_TimelineContent.default, {
    sx: {
      py: '50px',
      px: 2
    }
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h6",
    component: "span"
  }, "Northeastern University "), /*#__PURE__*/React.createElement(_Typography.default, null, "MS - Computer Science"))), /*#__PURE__*/React.createElement(_TimelineItem.default, null, /*#__PURE__*/React.createElement(_TimelineOppositeContent.default, {
    sx: {
      m: 'auto 0'
    },
    variant: "body2",
    color: "text.secondary"
  }, "2023 "), /*#__PURE__*/React.createElement(_TimelineSeparator.default, null, /*#__PURE__*/React.createElement(_TimelineConnector.default, null), /*#__PURE__*/React.createElement(_TimelineDot.default, {
    color: "primary"
  }, /*#__PURE__*/React.createElement(_School.default, null)), /*#__PURE__*/React.createElement(_TimelineConnector.default, null)), /*#__PURE__*/React.createElement(_TimelineContent.default, {
    sx: {
      py: '50px',
      px: 2
    }
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h6",
    component: "span"
  }, "Looking for internships! "), /*#__PURE__*/React.createElement(_Typography.default, null, "Full Stack Software Developer"))));
}