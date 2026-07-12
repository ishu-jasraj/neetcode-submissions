class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const len = nums.length;

        if(len < 3)return [];

        const triplets = [];

        nums.sort((a,b)=>a-b);

        for(let i = 0; i < len - 2; i++){
            if(nums[i] > 0)break;
            if(i > 0 && nums[i] === nums[i-1])continue;

            const target = -(nums[i]);
            let j = i + 1, k = len - 1;
            while(j < k){
                let sum = nums[j] + nums[k];
                if(sum === target){
                    triplets.push([nums[i], nums[j], nums[k]])
                    j++;
                    k--;

                    while(j < k && nums[j] === nums[j-1])j++
                    while(j < k && nums[k] === nums[k+1])k--
                }else if(sum > target){
                    k--;
                }else{
                    j++;
                }
            }



        }

        return triplets;
    }
}
