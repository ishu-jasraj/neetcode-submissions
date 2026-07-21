class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    result = [];
    target;

    find(nums, sum, curr, idx){
        if(sum === this.target){
            return this.result.push([...curr]);
        }

        if(sum > this.target)return;

        for(let i = idx; i < nums.length; i++){
            curr.push(nums[i]);
            this.find(nums, sum+nums[i], curr, i);
            curr.pop();
        }
    }

    combinationSum(nums, target) {
        this.result = [];
        this.target = target;

        this.find(nums, 0, [], 0);

        return this.result;
    }
}
