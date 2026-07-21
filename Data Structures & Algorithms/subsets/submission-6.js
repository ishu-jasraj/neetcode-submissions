class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]];

        for(let num of nums){
            const len = result.length;
            for(let i = 0; i < len; i++){
                result.push([...result[i], num])
            }
        }

        return result;
    }
}
