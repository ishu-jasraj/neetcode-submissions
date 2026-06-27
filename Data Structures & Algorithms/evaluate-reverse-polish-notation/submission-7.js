class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    isOperator(char){
        let operators = ['+', '-', '*', '/'];

        if(operators.includes(char))return true;
        return false;
    }
    evalRPN(tokens) {
        const stack = new Array();
        for(let ch of tokens){
            if(this.isOperator(ch)){
                const b = stack.pop();
                const a = stack.pop();
                let val;
                if(ch == '+'){
                    val = a + b
                }else if(ch == '-'){
                    val = a - b
                }else if(ch == '*'){
                    val = a * b
                }else if(ch == '/'){
                    val = Math.trunc(a/b)
                }
                stack.push(val)
            }else{
                stack.push(Number(ch));
            }
        }
        return stack[stack.length - 1];
    }
}
