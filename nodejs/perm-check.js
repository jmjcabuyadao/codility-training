/** Sum of integers from 1 to range */
function sumOfIntegers(range) {
    return ( range * (range + 1) ) / 2;
}

function solution(A) {
    const range = A.sort().length;
    const expectedSum = sumOfIntegers(range);
    let actualSum = 0;

    for (let i = 0; i < A.length; i++) {
        actualSum = actualSum + A[i];
    }

    if (expectedSum !== actualSum) return 0;

    let isPerm = 1;
    for (let j = 1; j < A.length; j++) {
        if (A[j] - A[j-1] !== 1) {
            isPerm = 0;

            break;
        }
    }

    return isPerm;
}