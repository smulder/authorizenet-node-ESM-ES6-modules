'use strict';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

// import pkg from 'authorizenet/package.json';


var config = {
	'timeout': 120000,
	'clientId': 'sdk-node-' + pkg.version,
	'logger': {
		'enabled': false,
		'location': './',
		//logging levels - { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 
		'level': 'debug'
	},
	'proxy': {
		'setProxy':false,
	    'proxyUrl':'http://proxy.yourcompany.com:80'
	}
};
export {config};
export default {config};
