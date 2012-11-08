/**
 * User: Troy
 * Date: 11/6/12
 * Time: 10:45 PM
 */


function calcSum() {
    var sum, ndx, len = arguments.length;

    for(sum=0, ndx=0; ndx < len; ndx++) {
        if(typeof arguments[ndx] === 'number') {
            sum += arguments[ndx];
        }
    }
    return sum;
}

var sum = calcSum(1,2,3,4,5,"yellow",6,7,8,9,10);
console.log("The sum is " + sum);

