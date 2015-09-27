# sbind (aka speedy-bind)

[![Actual version published on NPM](https://badge.fury.io/js/sbind.png)](https://www.npmjs.org/package/sbind)
[![npm module downloads per month](http://img.shields.io/npm/dm/sbind.svg)](https://www.npmjs.org/package/sbind)
[![npm module dependencies](https://david-dm.org/Lcfvs/sbind.png)](https://www.npmjs.org/package/sbind)

A tiny but powerful JavaScript module, to play with  `Function.bind()`, under the MIT license.

It provides some simple context-free and fast functions to bind on each function or methods.

You can use it like a `Function.call()` or play with arrays or arguments objects like a `Function.apply()`.


## Install :

`npm install sbind`


## Reference :

### sbind.detach(method) :

```JavaScript
var detach,
    substring,
    substringFromHello;

detach = require('sbind').detach;
// we create a context-free function to extract substrings
substring = all(String.prototype.substring);

console.log(substring.name); // 'substring'
```

### sbind.call(method) :

```JavaScript
var call,
    substring,
    substringFromHello;

call = require('sbind').call;
// we create a context-free function to extract substrings
substring = call(String.prototype.substring);

console.log(substring('Hello world!', 0, 5)); // 'Hello'
console.log(substring('Hello world!', 6, 11)); // 'world'
```

### sbind.bind(method) :

```JavaScript
var bind,
    substring,
    substringFromHello;

bind = require('sbind').bind;
// we create a context-free function to extract substrings
substring = bind(String.prototype.substring);
// we bind the string 'Hellow world!' to extract substrings
substringFromHello = substring('Hello world!');

console.log(substringFromHello(0, 5)); // 'Hello'
console.log(substringFromHello(6, 11)); // 'world'
```

### sbind.apply(method) :

```JavaScript
var apply,
    substring,
    substringFromHello;

apply = require('sbind').apply;
// we create a context-free function to extract substrings
substring = apply(String.prototype.substring);

console.log(substring('Hello world!', [0, 5])); // 'Hello'
console.log(substring('Hello world!', [6, 11])); // 'world'
```

### sbind.all(method) :

```JavaScript
var all,
    substring,
    substringFromHello;

all = require('sbind').all;
// we create a context-free function to extract substrings
substring = all(String.prototype.substring);
// we bind the string 'Hellow world!' to extract substrings
substringFromHello = substring('Hello world!');

console.log(substringFromHello([0, 5])); // 'Hello'
console.log(substringFromHello([6, 11])); // 'world'
```


## Requirements :

* ES5 support `Function.bind()`