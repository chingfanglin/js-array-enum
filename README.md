
# Installation (node.js)

    $ npm install js-array-enum

# Installation (browser)

    <script src="enum.js"></script>

# Usage

````js
// use it as module
require('js-array-enum');

number: [{'A':1, 'B':2, 'C':[3,4]}]

number.getEnumValue('A') // 1

number.getEnumValue('1') // A

number.getEnumValue('3') // C
number.getEnumValue('4') // C

number.getEnumValue(['A','B']) // [1,2]
````
