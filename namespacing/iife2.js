/**
 * User: Troy
 * Date: 11/4/12
 * Time: 10:27 AM
 */

(function( namespace, undefined ){
    // public method
    namespace.sayGoodbye = function(){
        console.log(namespace.foo);
        console.log(namespace.bar);
        /* can't access the private members from this module since they are defined in a different context */
        speak('goodbye');
    }
}( window.namespace = window.namespace || {}));