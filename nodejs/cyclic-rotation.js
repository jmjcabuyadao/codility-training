/**
 * Input: array of integers N
 * Output: array of integers rotated K times
 * Time Complexity: O(n*n) [ O(n) - array length, O(n) - steps which could also be array length]
 */
function solution(array, steps) 
{
    if (array.length === 0 || 
        steps === 0 ||
        array.length === steps
    ) {
        return array;
    }

    let rightArray = [];
    const lastKey = (array.length) - 1;
    for (let taken = 1; taken <= steps; taken++) {
        for (let i = 0; i <= lastKey; i++) {
            let newKey = i + 1;
            if (newKey > lastKey) newKey = 0;
            rightArray[newKey] = array[i];
        }
        array = rightArray;
        rightArray = [];
    }
   
    return array;
}

console.log(solution([1, 2, 3, 4], 4));
console.log(solution([3, 8, 9, 7, 6], 5));
console.log(solution([], 100));
console.log(solution([37, 20, 38, -1000, 299, 40, -288, -39, 49, -193, 947, -999, -47, 29], 100));