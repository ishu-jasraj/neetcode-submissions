class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    ans = []

    find(nums, i, curr){
        if(i === nums.length){
            return this.ans.push([...curr]);
        }

        this.find(nums, i+1, curr)
        curr.push(nums[i])
        this.find(nums, i+1, curr)
        curr.pop()
    }

    subsets(nums) {
        this.ans = []
        this.find(nums, 0, []);
        return this.ans;
    }
}
