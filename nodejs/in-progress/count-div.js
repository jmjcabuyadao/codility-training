function solution(A, B, K) {
    let divCount = 0;

    for (let i = A; i <= B; i++) {
        if (i % K === 0) divCount++
    }

    return divCount;
}

console.log(solution(0, 2000000, 1));
console.log(solution(0, 2000000, 5));