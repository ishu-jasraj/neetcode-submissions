class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length
        const suffix = new Array(len).fill(1);
        let prefix = 1;
        const result = new Array(len);

        for(let i = len - 2; i >= 0; i-- ){
            suffix[i] = nums[i+1] * suffix[i+1];
        }

        for(let i = 0; i < len; i++){
            result[i] = prefix * suffix[i];
            prefix *= nums[i];
        }

        return result;
    }
}
