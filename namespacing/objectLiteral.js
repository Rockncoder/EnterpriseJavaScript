/**
 * User: Troy
 * Date: 11/4/12
 * Time: 8:59 AM
 */

var myApp = {
    getInfo : function(){ /**/ },
    models : {},
    views : {
        pages : {}
    },
    collections : {}
};

/* We can also add properties directly to our object */

myApp.foo = function(){
    return "bar";
};

myApp.utils = {
    toString : function(){
        /*..*/
    },
    export : function(){
        /*..*/
    }
};