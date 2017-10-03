'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _temporalUndefined = {};

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

/**
 * @param{Number|Boolean|Array} render
 */
var StaticView = _temporalUndefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + ' is not defined - temporal dead zone'); } return true; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports.StaticView = StaticView = (function (_Component) {
    _inherits(_temporalAssertDefined(StaticView, 'StaticView', _temporalUndefined) && StaticView, _Component);

    _createClass(_temporalAssertDefined(StaticView, 'StaticView', _temporalUndefined) && StaticView, null, [{
        key: 'defaultProps',
        value: {
            render: 1
        },
        enumerable: true
    }]);

    function StaticView(props) {
        _classCallCheck(this, _temporalAssertDefined(StaticView, 'StaticView', _temporalUndefined) && StaticView);

        _get(Object.getPrototypeOf((_temporalAssertDefined(StaticView, 'StaticView', _temporalUndefined) && StaticView).prototype), 'constructor', this).call(this, props);
        this._render = this.props.render || 1;
        this.renderCount = 0; // 计数器
    }

    _createClass(_temporalAssertDefined(StaticView, 'StaticView', _temporalUndefined) && StaticView, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this._render = nextProps.render;
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            this.renderCount++;

            if (typeof this._render === 'boolean') {
                return this._render;
            } else if (Array.isArray(this._render)) {

                if (this._render.indexOf(this.renderCount) !== -1) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof this._render === 'number') {
                if (this.renderCount >= this._render) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var _props$children = _props.children;
            var children = _props$children === undefined ? null : _props$children;
            var render = _props.render;

            var props = _objectWithoutProperties(_props, ['children', 'render']);

            return _react2['default'].createElement(
                'div',
                _temporalAssertDefined(props, 'props', _temporalUndefined) && props,
                _temporalAssertDefined(children, 'children', _temporalUndefined) && children
            );
        }
    }]);

    return _temporalAssertDefined(StaticView, 'StaticView', _temporalUndefined) && StaticView;
})(_react.Component);

exports['default'] = _temporalAssertDefined(StaticView, 'StaticView', _temporalUndefined) && StaticView;
module.exports = exports['default'];