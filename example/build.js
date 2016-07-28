(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const isOnline = require('../');

function changeText(arg) {
  document.querySelector('div').textContent = JSON.stringify(arg);
}

isOnline((err, status) => {
  if (err) throw err;
  changeText(status);
});

},{"../":2}],2:[function(require,module,exports){
/* global window, navigator */
'use strict';

module.exports = cb => {
  if (!navigator) {
    return cb(new Error('Browser not supported'));
  }

  ['offline', 'online'].forEach(evt => {
    window.addEventListener(evt, () => {
      cb(null, navigator.onLine);
    });
  });

  cb(null, navigator.onLine);
};


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGlzT25saW5lID0gcmVxdWlyZSgnLi4vJyk7XG5cbmZ1bmN0aW9uIGNoYW5nZVRleHQoYXJnKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYXJnKTtcbn1cblxuaXNPbmxpbmUoKGVyciwgc3RhdHVzKSA9PiB7XG4gIGlmIChlcnIpIHRocm93IGVycjtcbiAgY2hhbmdlVGV4dChzdGF0dXMpO1xufSk7XG4iLCIvKiBnbG9iYWwgd2luZG93LCBuYXZpZ2F0b3IgKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBjYiA9PiB7XG4gIGlmICghbmF2aWdhdG9yKSB7XG4gICAgcmV0dXJuIGNiKG5ldyBFcnJvcignQnJvd3NlciBub3Qgc3VwcG9ydGVkJykpO1xuICB9XG5cbiAgWydvZmZsaW5lJywgJ29ubGluZSddLmZvckVhY2goZXZ0ID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldnQsICgpID0+IHtcbiAgICAgIGNiKG51bGwsIG5hdmlnYXRvci5vbkxpbmUpO1xuICAgIH0pO1xuICB9KTtcblxuICBjYihudWxsLCBuYXZpZ2F0b3Iub25MaW5lKTtcbn07XG5cbiJdfQ==
