/**
 * User: Troy
 * Date: 11/6/12
 * Time: 8:10 PM
 */

function testFunction(param1, param2, param3) {
    console.log("window == this? " + (window == this));
    console.log("typeof this = " + typeof this);
    console.log("arguments length = " + arguments.length);
    console.log("param1 = " + param1);
    console.log("param2 = " + param2);
    console.log("param3 = " + param3);
}

function showArguments () {
    console.log("**** showArguments");
    for(var ndx=0; ndx < arguments.length; ndx++) {
        console.log("index of " + ndx + " = " + arguments[ndx]);
    }
}

function modifyCaller() {
    this.bob = "bob";
    this.joe = "joe";
}

var testArray = [];
var testObject = {};

testFunction('a','b','c');
modifyCaller();

var tweakMe = (function () {
    modifyCaller();
    return this;
})();

(function () {
    console.log("**** Call & Apply");
    testFunction.call(this, "X", "Y", "Z");
    testFunction.call(testFunction, "1", "2", "3");
    testFunction.apply(testFunction, ["1", "2", "3"]);

    testFunction.call(testFunction, "1");

    // arguments demo
    showArguments("Bob", "Joe", 1, 2, 3, true);
})();

function Point(x, y) {
    this.x = x;
    this.y = y;
    modifyCaller.call(this);
}

var point = new Point(100, 200);



console.log("**** The Length Property");
console.log("testFunction " + testFunction.length);
console.log("showArguments " + showArguments.length);
console.log("Point " + Point.length);
