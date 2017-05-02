

# JavaScript js-array-enum [![Code Climate](https://codeclimate.com/github/chingfanglin/js-array-enum.svg)](https://codeclimate.com/github/chingfanglin/js-array-enum)

# Introduction

Enum is a javascript module that introduces the Enum Type. It works for node.js and in the browser.
Enumerate function in Array prototype.

# Dependencies

No dependencies!

# Installation (node.js)

    $ npm install js-array-enum

# Installation (browser)

    <script src="enum.js"></script>

# Usage

````js
// use it as module
require('js-array-enum');

var number = [{ A : 1, B : 2, C : [3,4] }]

//get your key or value

number.getEnumValue('A') // 1
//or
number.getEnumValue('1') // A
//or
number.getEnumValue('C') // [3,4]
//or
number.getEnumValue('4') // C

// Can be passed into an array or multiple parameters
number.getEnumValue(['A','B']) // [1,2]
//or
number.getEnumValue('A','C') // [1,[1,2]]

// You can add a default value
var number = [{ A : 1, B : 2, C : [3,4], default : "my_default" }]

// Can not find it
number.getEnumValue('abc') // my_default
//or
number.getEnumValue() // my_default

````


# Authors
* [ChingFang Lin](https://github.com/chingfanglin)
