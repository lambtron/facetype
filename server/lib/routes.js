
/**
 * Module dependencies.
 */

var render = require('./render');

/**
 * Render index html page.
 */

exports.index = function *() {
  return this.body = yield render('index');
};

/**
 * Render about html page.
 */

exports.about = function *() {
  return this.body = yield render('about');
};
