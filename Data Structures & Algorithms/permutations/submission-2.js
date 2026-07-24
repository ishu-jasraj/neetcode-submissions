class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        const n = nums.length;

        function find(curr){
            if(curr.length === n){return res.push([...curr])};

            for(let i = 0; i < n; i++){
                if(!curr.includes(nums[i])){
                    curr.push(nums[i]);
                    find(curr);
                    curr.pop();
                }
            }
        }

        find([]);

        return res;

    }
}
