import callBind from 'es-abstract/helpers/callBind.js';

import getPolyfill from 'getprototypeof/polyfill';

export default getPolyfill();

export { default as getPolyfill } from 'getprototypeof/polyfill';
export { default as implementation } from 'getprototypeof/implementation';
export { default as shim } from 'getprototypeof/shim';
