/**
 * User: Troy
 * Date: 11/4/12
 * Time: 11:35 AM
 */


/* O(1) */

function isFirstElementNull(strings) {
    if(strings[0] === null) {
        return true;
    }
    return false;
}

/* O(N) linear */
function containsValue(strings, value)
{
    for(var i = 0; i < strings.length; i++) {
        if(strings[i] === value) {
            return true;
        }
    }
    return false;
}

/* O(N ^ 2) */
function containsDuplicates(strings) {
    for(var i = 0; i < strings.length; i++) {
        for(var j = 0; j < strings.length; j++) {
            if(i !== j) {
                if(strings[i] === strings[j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

/* O(2^N) */

