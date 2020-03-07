
function solution(A, B) {
    const N = A.length;
    if (N === 0) return 0;

    let currentEnd = B[0];
    let segmentCount = 1;
    for (let i = 1; i < N; i++) {
        if (A[i] > currentEnd) {
            currentEnd = B[i];
            segmentCount++;
        }
    }

    return segmentCount;
}

console.log(solution([1,3,7,9,9], [5,6,8,9,10]));