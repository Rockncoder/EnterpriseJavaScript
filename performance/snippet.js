/**
 * User: Troy
 * Date: 11/4/12
 * Time: 1:11 PM
 */

/*
 Make this snippet faster
 The phrase must be displayed 10,000 times in the <div>
 */
(function() {

    var ndx,
        elapsed,
        bob,
        phrase = "The quick brown fox jumps over the lazy dog",
        startTime = new Date().getTime();

    for (ndx = 0; ndx < 10000; ndx++) {
        bob = $("<span>").text(phrase);
        $("#lines").append(bob);
    }

    elapsed = new Date().getTime() - startTime;
    $("#perf").text("Elapsed = " + elapsed + " ms");
})();

/*
    One potential solution, 7 times faster
 */
(function() {

    var ndx,
        elapsed,
        $lines = $("#lines"),
        phrase = "<span>The quick brown fox jumps over the lazy dog</span>",
        buffer = "",
        startTime = new Date().getTime();

    $lines.html("");
    for (ndx = 10000; --ndx;) {
        buffer += phrase;
    }
    $lines.append(buffer);

    elapsed = new Date().getTime() - startTime;
    $("#perf").text("elapsed = " + elapsed + " ms");
})();
