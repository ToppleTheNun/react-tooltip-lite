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

var _TooltipBubble = require('./TooltipBubble');

var _TooltipBubble2 = _interopRequireDefault(_TooltipBubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Tooltip
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description The container of a lightweight and responsive tooltip.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tooltip = function (_React$PureComponent) {
  _inherits(Tooltip, _React$PureComponent);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this));

    _this.target = null;
    _this.tip = null;


    _this.state = {
      showTip: false
    };

    _this.target = _react2.default.createRef();
    _this.tip = _react2.default.createRef();

    _this.showTip = _this.showTip.bind(_this);
    _this.hideTip = _this.hideTip.bind(_this);
    _this.toggleTip = _this.toggleTip.bind(_this);
    _this.startHover = _this.startHover.bind(_this);
    _this.endHover = _this.endHover.bind(_this);
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // if the isOpen prop is passed on first render we need to immediately trigger a second render,
      // because the tip ref is needed to calculate the position
      if (this.props.isOpen) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ isOpen: true });
      }
    }
  }, {
    key: 'toggleTip',
    value: function toggleTip() {
      this.setState({ showTip: !this.state.showTip });
    }
  }, {
    key: 'showTip',
    value: function showTip() {
      this.setState({ showTip: true });
    }
  }, {
    key: 'hideTip',
    value: function hideTip() {
      this.setState({ showTip: false });
    }
  }, {
    key: 'startHover',
    value: function startHover() {
      this.setState({ showTip: true });
    }
  }, {
    key: 'endHover',
    value: function endHover() {
      this.setState({ showTip: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          direction = _props.direction,
          className = _props.className,
          padding = _props.padding,
          children = _props.children,
          content = _props.content,
          eventOn = _props.eventOn,
          eventOff = _props.eventOff,
          eventToggle = _props.eventToggle,
          useHover = _props.useHover,
          background = _props.background,
          color = _props.color,
          useDefaultStyles = _props.useDefaultStyles,
          isOpen = _props.isOpen,
          tipContentHover = _props.tipContentHover,
          arrow = _props.arrow,
          arrowSize = _props.arrowSize,
          distance = _props.distance,
          portalContainer = _props.portalContainer,
          others = _objectWithoutProperties(_props, ['direction', 'className', 'padding', 'children', 'content', 'eventOn', 'eventOff', 'eventToggle', 'useHover', 'background', 'color', 'useDefaultStyles', 'isOpen', 'tipContentHover', 'arrow', 'arrowSize', 'distance', 'portalContainer']);

      var showTip = typeof isOpen === 'undefined' ? this.state.showTip : isOpen;

      var props = {};

      // event handling
      if (eventOff) {
        props[eventOff] = this.hideTip;
      }

      if (eventOn) {
        props[eventOn] = this.showTip;
      }

      if (eventToggle) {
        props[eventToggle] = this.toggleTip;

        // only use hover if they don't have a toggle event
      } else if (useHover) {
        props.onMouseEnter = this.startHover;
        props.onMouseLeave = tipContentHover ? this.endHover : this.hideTip;
        props.onTouchStart = this.toggleTip;
      }

      if (_react2.default.Children.count(children) !== 1) {
        throw new Error('You must pass exactly one child element into Tooltip that it can attach to.');
      }
      if (children.type.toString() === 'Symbol(react.fragment)') {
        throw new Error('The one child element passed into Tooltip cannot be a React Fragment.');
      }

      // map other properties and most importantly, reference to the inner DOM component
      var updatedChildren = _react2.default.Children.map(children, function (child) {
        var additionalProps = _extends({}, props, others);
        if (typeof child.type === 'function') {
          // if the Tooltip is attaching to another React Component
          // the inner React Component MUST handle the passing of the ref on its own (as well as spread other props (most importantly the events)
          return _react2.default.cloneElement(child, _extends({
            innerRef: _this2.target
          }, additionalProps));
        }
        // or an HTML node
        return _react2.default.cloneElement(child, _extends({
          ref: _this2.target
        }, additionalProps));
      });
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        updatedChildren,
        showTip && _react2.default.createElement(_TooltipBubble2.default, {
          direction: direction,
          className: className,
          content: content,
          background: background,
          color: color,
          padding: padding,
          eventToggle: eventToggle,
          useHover: useHover,
          useDefaultStyles: useDefaultStyles,
          tipContentHover: tipContentHover,
          arrow: arrow,
          arrowSize: arrowSize,
          distance: distance,
          target: this.target.current,
          startHover: this.startHover,
          endHover: this.endHover,
          container: portalContainer
        })
      );
    }
  }]);

  return Tooltip;
}(_react2.default.PureComponent);

Tooltip.propTypes = {
  direction: _propTypes2.default.string,
  className: _propTypes2.default.string,
  content: _propTypes2.default.node.isRequired,
  background: _propTypes2.default.string,
  color: _propTypes2.default.string,
  padding: _propTypes2.default.string,
  eventOn: _propTypes2.default.string,
  eventOff: _propTypes2.default.string,
  eventToggle: _propTypes2.default.string,
  useHover: _propTypes2.default.bool,
  useDefaultStyles: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  tipContentHover: _propTypes2.default.bool,
  arrow: _propTypes2.default.bool,
  arrowSize: _propTypes2.default.number,
  distance: _propTypes2.default.number,
  portalContainer: _propTypes2.default.object.isRequired
};
Tooltip.defaultProps = {
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
exports.default = Tooltip;