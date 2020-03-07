/**
 * Correctness: 91%
 */
function solution(S) {
    const operations = S.split(" ");
    const stack = [];
    
    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];
        
        if (["POP", "DUP"].includes(op) && stack.length < 1) {
            return -1;
        }
        if (["+", "-"].includes(op) && stack.length < 2 ) {
            return -1;
        }

        let topmost;
        switch (op) {
            case 'POP':
                stack.shift(stack[0]);
                break;
            case 'DUP':
                topmost = stack.shift(stack[0]);
                stack.unshift(topmost, topmost);
                break;
            case '+':
                topmost = stack.shift(stack[0]);
                const sum = topmost + stack[0];
                stack[0] = sum;
                break;
            case '-':
                topmost = stack.shift(stack[0]);
                const diff = topmost - stack[0];
                stack[0] = diff;
                break;
            default:
                stack.unshift(parseInt(op));        
        }

        if (stack[0] < 0 || stack[0] > ((2**20)-1)) return -1;
    }
    
    return (stack.length !== 0) ? stack.shift() : -1;
}

console.log(solution("13 DUP 4 POP 5 DUP + DUP + -"))
console.log(solution("5 6 + -"))
console.log(solution("3 DUP 5 - -"))
console.log(solution('9 432 DUP 4 5 DUP + 2000 POP - POP 31 POP 75 89 95 - 999 + 4739 - DUP'))