/**
 * Input: positive integer
 * Output: maximal sequence of consecutive zeros that is surrounded by ones in binary
 * Time Complexity: O(n) where n is the length of binary representation
 */
function solution(input) {
    var binaryDigits = input.toString(2).split(''); // convert integer to binary representation
    var currentMax = 0;
    var zeroCount = 0;
    binaryDigits.forEach(function (digit) {
        if (parseInt(digit) === 0) {
            zeroCount++;
        }
        if (parseInt(digit) === 1) {
            currentMax = Math.max(zeroCount, currentMax);
            zeroCount = 0;
        }
    });

    return currentMax;
}