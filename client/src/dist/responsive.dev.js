"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mobile = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @media only screen and (max-width: 380px) {\n      ", "\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mobile = function mobile(props) {
  return (0, _styledComponents.css)(_templateObject(), props);
};

exports.mobile = mobile;