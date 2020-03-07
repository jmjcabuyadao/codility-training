/**
 * 
 * Time Complexity: O(N * N) --- could be improved
 */
function solution(A) {
    const N = A.length;
    const lastIndex = N - 1;
    let sumDifference = [];

    for (let P = 1; P <= lastIndex; P++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let leftIndex = 0; leftIndex < P; leftIndex++) {
            leftSum += A[leftIndex];
        }

        for (let rightIndex = P; rightIndex <= lastIndex; rightIndex++) {
            rightSum += A[rightIndex];
        }
        sumDifference.push( Math.abs(leftSum-rightSum) );
    }

    return Math.min(...sumDifference);
}

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([-1000, 1000]));
console.log(solution([-1000, -999, -998, -997, 1, 2, 3, 4]));
console.log(solution([-7, 1, 5, 2,-4, 3, 0]));