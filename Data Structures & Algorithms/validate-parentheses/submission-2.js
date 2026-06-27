class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    
    isValid(s) {
        const stack = new Array();
        for(let bracket of s){
            if(bracket == '(' || bracket == '[' || bracket == '{')stack.push(bracket)
            else{
                const popped = stack.pop();

                if((bracket == '}' && popped != '{') || (bracket == ']' && popped != '[') ||
                (bracket == ')' && popped != '('))return false;
            }
        }
        return stack.length == 0;
    }
}
