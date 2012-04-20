
(function() {
  var fn, method, _console, _i, _len, _ref, _ref2;
  _console = {};
  if (((_ref = window.localStorage) != null ? _ref.debug : void 0) && window.console) {
    _console = window.console;
  } else {
    fn = function() {};
    _ref2 = 'assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn'.split(',');
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
      method = _ref2[_i];
      _console[method] = fn;
    }
  }
  if (typeof define !== "undefined" && define !== null ? define.amd : void 0) {
    return define(['exports'], _console);
  } else {
    return window.console = _console;
  }
})();
