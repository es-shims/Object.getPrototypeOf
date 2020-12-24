'use strict';

var RequireObjectCoercible = require('es-abstract/2020/RequireObjectCoercible');
var implementation = require('./implementation');

var hasProto = [].__proto__ === Array.prototype; // eslint-disable-line no-proto

var getProto = function getPrototypeOf(value) {
	RequireObjectCoercible(value);
	return value.__proto__; // eslint-disable-line no-proto
};

module.exports = function getPolyfill() {
	if (Object.getPrototypeOf) {
		return Object.getPrototypeOf;
	}
	if (hasProto) {
		return getProto;
	}
	return implementation;
};
