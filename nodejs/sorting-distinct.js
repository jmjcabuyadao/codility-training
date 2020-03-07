function solution(A) {
    const frequencyMap = []; // HashMap
    A.forEach( value => {
        if (frequencyMap[value] == null) {
            frequencyMap[value] = true;
        }
    });

    return Object.keys(frequencyMap).length;
}

console.log(solution([2, 1, 1, 2, 3, 1]));