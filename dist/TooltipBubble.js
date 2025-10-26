'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _position = require('./position');

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class TooltipBubble
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description A lightweight and responsive tooltip.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// default colors
var defaultColor = '#fff';
var defaultBg = '#333';

var stopProp = function stopProp(e) {
  return e.stopPropagation();
};

var TooltipBubble = function (_React$PureComponent) {
  _inherits(TooltipBubble, _React$PureComponent);

  function TooltipBubble() {
    _classCallCheck(this, TooltipBubble);

    var _this = _possibleConstructorReturn(this, (TooltipBubble.__proto__ || Object.getPrototypeOf(TooltipBubble)).call(this));

    _this.tip = null;

    _this.tip = _react2.default.createRef();
    return _this;
  }

  _createClass(TooltipBubble, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // This is necessary because positions relies on the tooltip existing to determine the optimal location
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          direction = _props.direction,
          className = _props.className,
          padding = _props.padding,
          content = _props.content,
          eventToggle = _props.eventToggle,
          useHover = _props.useHover,
          background = _props.background,
          color = _props.color,
          useDefaultStyles = _props.useDefaultStyles,
          tipContentHover = _props.tipContentHover,
          arrow = _props.arrow,
          arrowSize = _props.arrowSize,
          distance = _props.distance,
          target = _props.target,
          startHover = _props.startHover,
          endHover = _props.endHover;


      var currentPositions = (0, _position2.default)(direction, this.tip.current, target, {
        background: useDefaultStyles ? defaultBg : background,
        arrow: arrow,
        arrowSize: arrowSize,
        distance: distance
      });

      var tipStyles = _extends({}, currentPositions.tip, {
        background: useDefaultStyles ? defaultBg : background,
        color: useDefaultStyles ? defaultColor : color,
        padding: padding,
        boxSizing: 'border-box',
        zIndex: 1000,
        position: 'absolute',
        display: 'inline-block'
      });

      var portalProps = {
        // keep clicks on the tip from closing click controlled tips
        onClick: stopProp
      };

      if (!eventToggle && useHover && tipContentHover) {
        portalProps.onMouseEnter = startHover;
        portalProps.onMouseLeave = endHover;
        portalProps.onTouchStart = stopProp;
      }

      return _react2.default.createElement(
        _Portal2.default,
        null,
        _react2.default.createElement(
          'div',
          _extends({}, portalProps, { className: className }),
          _react2.default.createElement(
            'span',
            { className: 'react-tooltip-lite', style: tipStyles, ref: this.tip },
            content
          ),
          currentPositions.arrow && _react2.default.createElement('span', {
            className: 'react-tooltip-lite-arrow react-tooltip-lite-' + currentPositions.realDirection + '-arrow',
            style: _extends({}, currentPositions.arrow, {
              position: 'absolute',
              width: 0,
              height: 0,
              zIndex: 1001
            })
          })
        )
      );
    }
  }]);

  return TooltipBubble;
}(_react2.default.PureComponent);

TooltipBubble.propTypes = {
  direction: _propTypes2.default.string,
  className: _propTypes2.default.string,
  content: _propTypes2.default.node.isRequired,
  background: _propTypes2.default.string,
  color: _propTypes2.default.string,
  padding: _propTypes2.default.string,
  eventToggle: _propTypes2.default.string,
  useHover: _propTypes2.default.bool,
  useDefaultStyles: _propTypes2.default.bool,
  tipContentHover: _propTypes2.default.bool,
  arrow: _propTypes2.default.bool,
  arrowSize: _propTypes2.default.number,
  distance: _propTypes2.default.number,
  target: _propTypes2.default.object,
  startHover: _propTypes2.default.func,
  endHover: _propTypes2.default.func
};
TooltipBubble.defaultProps = {
  direction: 'up',
  className: '',
  background: '',
  color: '',
  padding: '10px',
  useHover: true,
  useDefaultStyles: false,
  tipContentHover: false,
  arrow: true,
  arrowSize: 10,
  distance: undefined
};
exports.default = TooltipBubble;