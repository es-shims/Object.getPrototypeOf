'use strict';

var ToObject = require('es-abstract/2023/ToObject');

var ReflectGetPrototypeOf = require('reflect.getprototypeof');

module.exports = function getPrototypeOf(O) {
	return ReflectGetPrototypeOf(ToObject(O));
};
