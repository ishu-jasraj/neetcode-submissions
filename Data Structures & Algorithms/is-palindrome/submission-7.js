class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(ch){
        return /[a-zA-Z0-9]/.test(ch)
    }
    isPalindrome(str) {
        let i = 0, j = str.length - 1;
        while(i < j){
            while(i < str.length && !this.isAlphaNumeric(str[i]))i++;
            while(j >= 0 && !this.isAlphaNumeric(str[j]))j--;

            if(i < j && str[i].toLowerCase() !== str[j].toLowerCase())return false
            i++;
            j--;
        }
        return true;
    }
}
