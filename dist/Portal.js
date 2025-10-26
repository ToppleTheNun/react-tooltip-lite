'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Portal;

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Portal(_ref) {
  var children = _ref.children;

  var elRef = (0, _react.useRef)(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  (0, _react.useEffect)(function () {
    var portalRoot = document.getElementById('portal-root');
    if (!portalRoot) {
      return;
    }

    portalRoot.appendChild(elRef.current);
    return function () {
      portalRoot.removeChild(elRef.current);
    };
  }, []);

  return _reactDom2.default.createPortal(children, elRef.current);
}