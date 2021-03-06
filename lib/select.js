'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _same = require('./same');

var _same2 = _interopRequireDefault(_same);

exports['default'] = function (getters) {
	var deriver = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
		return x;
	} : arguments[1];

	if (!Array.isArray(getters)) {
		getters = [getters];
	}
	// Caches
	var lastGets = [],
	    derived = {};
	return function (state) {
		// New selections
		var gets = getters.map(function (fn) {
			return fn(state);
		});
		// If selections are different, invalidate
		if (!(0, _same2['default'])(lastGets, gets)) {
			derived = deriver.apply(undefined, _toConsumableArray(gets));
			lastGets = gets;
		}
		return derived;
	};
};

module.exports = exports['default'];