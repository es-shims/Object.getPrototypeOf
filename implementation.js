'use strict';

var GetIntrinsic = require('get-intrinsic');
var IsCallable = require('es-abstract/2020/IsCallable');
var ToObject = require('es-abstract/2020/ToObject');
var whichBuiltinType = require('which-builtin-type');

var $gPO = GetIntrinsic('%Object.getPrototypeOf%', true);
var $ObjectPrototype = GetIntrinsic('%Object.prototype%');

var hasProto = [].__proto__ === Array.prototype; // eslint-disable-line no-proto

module.exports = function getPrototypeOf(O) {
	var obj = ToObject(O);

	if ($gPO) {
		return $gPO(obj);
	}

	if (hasProto) {
		// eslint-disable-next-line no-proto
		var proto = obj.__proto__;
		if (proto || proto === null) {
			return proto;
		}
	}
	var type = whichBuiltinType(obj);
	if (type) {
		var intrinsic = GetIntrinsic('%' + type + '%.prototype', true);
		if (intrinsic) {
			return intrinsic;
		}
	}
	if (IsCallable(obj.constructor)) {
		return obj.constructor.prototype;
	}
	if (obj instanceof Object) {
		return $ObjectPrototype;
	}

	/*
	 * Correctly return null for Objects created with `Object.create(null)` (shammed or native) or `{ __proto__: null}`.  Also returns null for
	 * cross-realm objects on browsers that lack `__proto__` support (like IE <11), but that's the best we can do.
	 */
	return null;
};
