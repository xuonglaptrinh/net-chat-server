// Generated by CoffeeScript 1.7.1

/*
  Use it for displaying color code in console
  https://github.com/medikoo/cli-color
  Hope help for you
 */

(function() {
  var Utils, cliColor, _, __myConsole,
    __slice = [].slice;

  cliColor = require('cli-color');

  _ = require('underscore');

  __myConsole = console;

  Utils = (function() {
    function Utils() {}

    Utils._getDateTimeStr = function() {
      var date, dateStr, result, timeStr;
      result = '';
      date = new Date();
      dateStr = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
      timeStr = date.toLocaleTimeString();
      result = dateStr + ' ' + timeStr;
      result = cliColor.red.bgWhite.underline(result);
      return result;
    };

    Utils.writeLog = function() {
      var messages, msg, msgs, _i, _len;
      msgs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      messages = '';
      for (_i = 0, _len = msgs.length; _i < _len; _i++) {
        msg = msgs[_i];
        messages += _.isString(msg) ? msg : JSON.stringify(msg, null, '\t') + ' ';
      }
      __myConsole.log(this._getDateTimeStr(), ': ', messages);
    };

    Utils.getClientIp = function(req) {
      var forwardedIps, x_ip;
      x_ip = null;
      forwardedIps = req.headers['x-forwarded-for'];
      if (forwardedIps) {
        x_ip = forwardedIps.split(',')[0];
      }
      if (x_ip == null) {
        x_ip = req.connection.remoteAddress;
      }
      return x_ip;
    };

    return Utils;

  })();

  module.exports = Utils;

}).call(this);
