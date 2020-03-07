function solutionA(A) {
    let smallestNotInArray = 1;

    if (A.length === 0) return smallestNotInArray;

    const positivesArray = [];
    
    A.forEach(function (element) {
        if (element > 0) positivesArray[element] = true;
    });
    
    if (positivesArray.length === 0) return smallestNotInArray;
    if (positivesArray.length === 1 && positivesArray[0] !== 1) return smallestNotInArray;

    const positiveElements = Object.keys(positivesArray);

    for (let i = 1; i <= positiveElements.length ; i++) {
        if (!positiveElements.includes(i)) {
            smallestNotInArray = i;
            
            break;
        }
    }
    
    return smallestNotInArray;
}

function solution(A) {
    A.sort( function (a, b) {
        return a - b;
    });

    let smallestNotInArray = 1;
    
    for (let i in A) {
        if (A[i] > 0 && A[i] == smallestNotInArray) {
            smallestNotInArray++;
        }
    }

    return smallestNotInArray;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([9, 3, 4, 6, 1, 7, 2, 5, 8, 20, 17, 14, 11, 16, 15, 13, 19, 12, 18]));