class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;
        let ans = 0;

        while(i < j){
            let curr = Math.min(heights[i], heights[j]) * (j-i);

            if(heights[i] < heights[j])i++;
            else{
                j--;
            }

            ans = Math.max(ans, curr)
        }

        return ans
    }
}
