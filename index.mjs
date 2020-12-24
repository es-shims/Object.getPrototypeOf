import callBind from 'call-bind';

import getPolyfill from 'getprototypeof/polyfill';

export default callBind(getPolyfill(), Object);

export { default as getPolyfill } from 'getprototypeof/polyfill';
export { default as implementation } from 'getprototypeof/implementation';
export { default as shim } from 'getprototypeof/shim';
