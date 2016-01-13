'use strict';

var pkg = require('./package.json');
var fender = require('fender');

/**
 * Use Fender for nice and easy builds.
 * @see http://npmjs.com/fender
 */
module.exports = fender(pkg);
