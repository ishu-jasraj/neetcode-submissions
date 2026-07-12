class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(ch){
        return /[a-zA-Z0-9]/.test(ch)
    }
    isPalindrome(str) {
        let input = '';

        for(let ch of str){
            if(this.isAlphaNumeric(ch)){
                input+=ch.toLowerCase();
            }
        }

        let i = 0, j = input.length - 1;
        while(i < j){
            if(input[i++]!=input[j--])return false;
        }
        return true;
    }
}
