'use strict';
const isOnline = require('../');

function changeText(arg) {
  document.querySelector('div').textContent = JSON.stringify(arg);
}

isOnline((err, status) => {
  if (err) throw err;
  changeText(status);
});
