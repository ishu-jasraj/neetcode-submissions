class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map();
        let longest = 0;

        for(let num of nums){
            if(map.has(num))continue;

            let curr = 1, left = 0, right = 0;
            if(map.has(num-1)){
                left = map.get(num-1);
            }
            if(map.has(num+1)){
                right = map.get(num+1);
            }
            curr = 1 + left + right;
            map.set(num, curr)

            if(left > 0){
                map.set(num-left, curr)
            } 
            if(right > 0){
                map.set(num+right, curr)
            }

            longest = Math.max(longest, curr);

        }

        return longest;
    }
}
