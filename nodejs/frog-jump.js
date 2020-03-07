/**
 * X = start
 * Y = end
 * D = range
 * Output: Jumps needed to reach end from start if each jump is D steps
 * Time Complexity: O(1)
 */
function solution(X, Y, D) {
    const interval = Y-X;
    if (interval == 0) return 0;
    if (interval <= D) return 1;

    let jumpsNeeded = interval / D;

    if (interval % D === 0) return parseInt(jumpsNeeded);

    return parseInt(jumpsNeeded)+1;
}

console.log(solution(2,4,1));
console.log(solution(2,2,1));
console.log(solution(10,85,30));
console.log(solution(10,784,775));
