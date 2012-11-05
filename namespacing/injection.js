/**
 * User: Troy
 * Date: 11/4/12
 * Time: 10:50 AM
 */

var myApp = myApp || {};
myApp.utils =  {};

/* Inject new stuff into the */
(function() {
    var val = 5;
    this.getValue = function() {
        return val;
    };
    this.setValue = function(newVal) {
        val = newVal;
    }
    // also introduce a new sub-namespace
    this.tools = {};
}).apply(myApp.utils);

/* Inject new stuff into the myApp.utils.tools namespace */
(function(){
    this.diagnose = function(){
        return 'diagnosis';
    }
}).apply(myApp.utils.tools);

console.log(myApp); //the now populated namespace
console.log(myApp.utils.getValue()); // test get
myApp.utils.setValue(25); // test set
console.log(myApp.utils.getValue());
console.log(myApp.utils.tools.diagnose());
