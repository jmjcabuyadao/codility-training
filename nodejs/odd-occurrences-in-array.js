/**
 * Input: array of N integers
 * Output: value in array that appears odd times
 * Time Complexity: O(N) or O(N*log(N)) 
 */
function solution(A) {
    let frequencyArray = []; // HashMap
    A.forEach( value => {
        if (frequencyArray[value] != null) {
            frequencyArray[value] = frequencyArray[value] + 1;
        } else {
            frequencyArray[value] = 1;
        }
    });
    let oddOccurrence = A[0];
    for (const [index, value] of Object.entries(frequencyArray)) { // Access to hashmap must be key-value pair
        if (value % 2 !== 0) {
            oddOccurrence = index;

            break;
        }
    }

    return parseInt(oddOccurrence);
}

console.log(solution([5, 6, 1, 2, 3, 3, 4, 1, 4, 2, 5]));
console.log(solution([9, 3, 9, 3, 9, 7, 9]));