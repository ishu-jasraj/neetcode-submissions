class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    result;
    target;

    find(nums, start, curr, sum){
        if(sum > this.target)return;
        if(sum === this.target)return this.result.push([...curr]);

        for(let i = start; i < nums.length; i++){
            if(i === start || nums[i] !== nums[i-1]){
                curr.push(nums[i]);
                this.find(nums, i+1, curr, sum+nums[i]);
                curr.pop();
            }
        }
    }

    combinationSum2(candidates, target) {
        this.result = [];
        this.target = target;
        candidates.sort((a,b)=>a-b);
        this.find(candidates, 0, [], 0);
        return this.result;
    }
}
