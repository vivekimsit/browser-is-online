# browser-is-online [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Check the network connection


## Usage

```js
const isOnline = require('browser-is-online');

isOnline((err, status) => {
  if (err) throw err;
  changeText(status);
});
```

## License

MIT © [Vivek Poddar](http://github.com/vivekimsit)
