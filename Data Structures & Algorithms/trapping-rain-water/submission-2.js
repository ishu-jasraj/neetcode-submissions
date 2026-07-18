class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const len = height.length;
        let prefix = 0, suffix = new Array(len).fill(0);
        let maxWaterTrapped = 0;

        for(let i = len - 2; i>= 0; i--){
            suffix[i] = Math.max(height[i+1], suffix[i+1]);
        }

        for(let i = 1; i < len - 1; i++){
            prefix = Math.max(prefix, height[i-1]);
            let currWaterTrapped = (Math.min(prefix, suffix[i]) - height[i]) < 0 ? 0: Math.min(prefix, suffix[i]) - height[i];
            maxWaterTrapped += currWaterTrapped;
        }

        return maxWaterTrapped;
    }
}
