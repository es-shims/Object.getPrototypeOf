/* eslint-env node, browser */
/* eslint no-proto: 0 */
module.exports = function (object) {
    "use strict";
    var proto = object.__proto__;
    if (proto || proto === null) {
        return proto;
    } else if (object.constructor) {
        return object.constructor.prototype;
    } else {
        return Object.prototype;
    }
};
