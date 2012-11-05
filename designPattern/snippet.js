/**
 * User: Troy
 * Date: 11/4/12
 * Time: 9:32 PM
 */


/*
 Bind a event handler to the click event of the "Click Me" button
 Have it
 */
(function () {
    $(window).bind("log.me", function(event, msg) {
        $("#displayer").append($("<li>").text(msg));
    });
})();

$(window).trigger('log.me', ["Hello there"]);
