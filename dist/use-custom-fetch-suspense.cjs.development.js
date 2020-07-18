'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var produce = _interopDefault(require('immer'));
var lru = _interopDefault(require('lru-cache'));
var md5 = _interopDefault(require('md5'));

var cache = /*#__PURE__*/new lru(50);
var index = (function (url, options) {
  if (options === void 0) {
    options = {};
  }

  var key = url + "." + md5(JSON.stringify(options));
  var value = cache.get(key) || {
    status: 'new',
    data: null
  };

  if (value.status === 'resolved') {
    return value.data;
  }

  var promise = fetch(url, options).then(function (res) {
    return res.json();
  });
  promise.then(function (data) {
    cache.set(key, produce(value, function (draft) {
      draft.status = 'resolved';
      draft.data = data;
    }));
  });
  throw promise; // will be caught by suspense
});

exports.default = index;
//# sourceMappingURL=use-custom-fetch-suspense.cjs.development.js.map
