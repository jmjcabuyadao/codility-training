function solution(A) {
    let smallestNotInArray = 1;
    
    if (A.sort( function (a, b) {   // must sort with a compare function to deal with numbers since values are considered as strings in sort()
        return a - b;
    }).length == 1 && A[0] !== 1) return smallestNotInArray;

    for (let i in A) {
        if (A[i] > 0 && A[i] == smallestNotInArray) {
            smallestNotInArray++;
        }
    }

    return smallestNotInArray;
}