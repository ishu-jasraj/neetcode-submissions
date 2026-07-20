class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    result = []

    find(nums, idx, curr){
        if(idx === nums.length)return this.result.push([...curr]);

        curr.push(nums[idx]);
        this.find(nums, idx+1, curr);
        curr.pop();
        this.find(nums, idx+1, curr);
    }

    subsets(nums) {
        this.result = [];
        this.find(nums, 0, []);
        return this.result;
    }
}
