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

