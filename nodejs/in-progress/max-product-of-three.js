function solution(A) {
    let maxProduct = 1;
    A.sort( function (a, b) {
        return b-a;
    });

    for (let i = 0; i < 3; i++) {
        maxProduct *= A[i];
    }

    return maxProduct;
}

function solutionB(A) {
    const length = A.sort(( function (a, b) {
        return a-b;
    })).length;
    let maxProduct = 1;
    let leftIndex = 0;
    let rightIndex = length - 1;
    let negativeCount = 0;
    let i = 0;
    console.log(A);
    do {
        console.log(`leftIndex: ${leftIndex}, rightIndex: ${rightIndex}`);
        console.log(`negativeCount: ${negativeCount}`);
        console.log(`L: ${A[leftIndex]} R: ${A[rightIndex]}`);
        console.log(`maxProduct: ${maxProduct}`);
        if ( (negativeCount % 2 !== 0) ) {
            if ( Math.abs(A[leftIndex]) >= Math.abs(A[rightIndex]) ) {
                console.log("FOO")
                maxProduct *= A[leftIndex];
                if (A[leftIndex] < 0) negativeCount++;
                leftIndex++;
            } else {
                console.log("BAR")
                maxProduct *= A[rightIndex];
                rightIndex--;
            }
        } else {
            if ( Math.abs(A[leftIndex]) < Math.abs(A[rightIndex]) ) {
                console.log("FIZZ")
                maxProduct *= A[rightIndex];
                if (A[rightIndex] < 0) negativeCount++;
                rightIndex--;
            } else {
                console.log("BUZZ")
                maxProduct *= A[leftIndex];
                leftIndex++;
            }
        }
        i++;
    } while (i <= 3);

    return maxProduct;
}

console.log(solutionB([-3, 1, 2, -2, 5, 6]));
console.log(solutionB([-5, 5, -5, 4]));