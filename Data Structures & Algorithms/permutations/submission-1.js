class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        const n = nums.length;

        function find(start, curr, look){
            if(curr.length === n){return res.push([...curr])};

            let i = start, flag = 1;

            while(flag || i !== start){
                flag = 0;

                if(!look.includes(i)){
                    curr.push(nums[i]);
                    look.push(i);

                    find((start+1)%n, curr, look);
                    curr.pop();
                    look.pop();
                }

                i = (i+1)%n;
            }
        }

        find(0,[],[]);

        return res;

    }
}
