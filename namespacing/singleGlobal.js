/**
 * User: Troy
 * Date: 11/4/12
 * Time: 8:57 AM
 */


var myApp = (function () {
    var bob = function(msg) {
        alert(msg);
    };
    var pete = function(msg) {
        alert("pete says: "+msg);
    };

    return {
        callBob: bob
    };
})();