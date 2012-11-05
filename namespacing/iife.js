/**
 * User: Troy
 * Date: 11/4/12
 * Time: 9:31 AM
 */


/* an (anonymous) immediately-invoked function expression */
(function(){
    console.log("(anonymous) immediately-invoked function");
})();

/* a named immediately-invoked function expression */
(function foobar(){
    console.log("a named immediately-invoked function");
}());

var namespace = namespace || {};

(function ( namespace, undefined ) {
    // private properties
    var foo = "foo",
        bar = "bar";
    // public methods and properties
    namespace.foobar = "foobar";
    namespace.sayHello = function () {
        speak("hello world");
    };
    // private method
    function speak(msg) {
        console.log("You said: " + msg);
    };
    // check to evaluate whether 'namespace' exists in the
    // global namespace - if not, assign window.namespace an
    // object literal
}(window.namespace = window.namespace || {}));

// we can then test our properties and methods as follows public
console.log(namespace.foobar); // foobar
namespace.sayHello(); // hello world

// assigning new properties
namespace.foobar2 = "foobar";
console.log(namespace.foobar2);