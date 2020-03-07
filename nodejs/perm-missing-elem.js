/**
 * Input: array of N integers from [1, ... , N+1] --- an element is missing
 * Output: the missing element
 * Time Complexity: O(n) or O(N * log(N))
 */
function solution(A) {
    const lengthOfActual = A.length;

    if (lengthOfActual === 0) return 1;

    let actualSum = 0;

    for (let i = 0; i < A.length; i++) {
        actualSum = actualSum + A[i];
    }

    const maxInArray = Math.max(...A);
    const expectedSum = sumOfIntegers(maxInArray);

    const missingElement = expectedSum - actualSum;

    return (missingElement === 0) ? maxInArray + 1 : missingElement;
}

/** Sum of integers from 1 to range */
function sumOfIntegers(range) {
    return ( range * (range + 1) ) / 2;
}

console.log(solution([2, 3, 1, 5]));
console.log(solution([2]));
console.log(solution([1, 2]));
console.log(solution([2, 3, 4, 5, 6]));