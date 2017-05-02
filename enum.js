// AMD / RequireJS
if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
        return getEnumValue();
    });
}
// Node.js
else if (typeof module !== 'undefined' && module.exports) {
    module.exports = getEnumValue();
}
// included directly via <script> tag
else {
    getEnumValue()
}


function getEnumValue() {
     Array.prototype.getEnumValue = function() {
    var itemList = [];
    for (var length = arguments.length, arrayList = Array(length), r = 0; r < length; r++) arrayList[r] = arguments[r];

    if (Object.prototype.toString.call(arrayList[0]) === '[object Array]') {
        itemList = arrayList[0];
    } else {
        arrayList.forEach(function(value) {
            itemList.push(value);
        });
    }
    var returnArray = [];
    var _default = this[0].default || [];
    this.forEach(function(element) {
        for (var k in element) {
            if (element.hasOwnProperty(k)) {
                var key = k;
                var value = element[k];
                itemList.forEach(function(data) {
                    if (Object.prototype.toString.call(value) === '[object Array]') {
                      if (!value.indexOf("" + data)) {
                            returnArray.push(key);
                        } else if (data  key) {
                            returnArray.push(value);
                        }
                    } else if (data == key) {
                        returnArray.push(value);
                    } else if (data == value) {
                        returnArray.push(key);
                    }
                });
            }
        }
    });
    return returnArray.length > 0 ? returnArray.length == 1 ? returnArray[0] : returnArray : _default;
};
}
