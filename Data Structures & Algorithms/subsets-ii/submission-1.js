class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    result;

    find(nums, start, curr){
        this.result.push([...curr]);

        for(let i = start; i < nums.length; i++){
            if(i === start || nums[i] !== nums[i-1]){
                curr.push(nums[i]);
                this.find(nums, i+1, curr);
                curr.pop();
            }
        }
    }

    subsetsWithDup(nums) {
        this.result = [];
        nums.sort((a,b)=>a-b);

        this.find(nums, 0, []);

        return this.result;
    }
}
