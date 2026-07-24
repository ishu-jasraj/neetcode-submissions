class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        const curr = [];

        function find(open, close){
            if(open == 0 && close == 0){
                return res.push(curr.join(""));
            };

            if(open === close){
                curr.push('(');
                find(open-1, close);
                curr.pop();
            }else if(open == 0){
                curr.push(')');
                find(open, close-1);
                curr.pop();
            }else{
                curr.push('(');
                find(open -1, close);
                curr.pop();

                curr.push(')');
                find(open, close - 1)
                curr.pop();
            }
        }

        find(n, n);
        return res;
    }
}
