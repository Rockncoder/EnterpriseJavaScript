/**
 * User: Troy
 * Date: 11/4/12
 * Time: 7:49 PM
 */


/*
This isn't jQuery code, just a theoretical library
 */

/*
 * Without chaining
 *
addEvent($('example'), 'click', function () {
    setStyle(this, 'color', 'green');
    show(this);
});

 *
 * With chaining
 *
$('example').addEvent('click', function () {
    $(this).setStyle('color', 'green').show();
});

*/


/*
 * constructor
 */
function Clean_Talk(text) {
    this.talk = text;
}

/*
 * each method returns "this" except speakNow
 */
Clean_Talk.prototype = {
    modify: function () {
        this.talk = "Cleaned Talk: " + this.talk;
        return this;
    },
    filter: function () {
        this.talk = this.talk.replace(/badword|anotherbadword/gi, "****");
        return this;
    },
    speakNow: function () {
        alert(this.talk);
    }
};


var clean_talk = new Clean_Talk("Bob said a badword. Can you filter it out?");
clean_talk.modify().filter().speakNow();
