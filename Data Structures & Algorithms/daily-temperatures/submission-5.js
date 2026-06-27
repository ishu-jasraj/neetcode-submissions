class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const warmer = new Array(temps.length).fill(0);
        const stack = new Array();

        for(let i = temps.length - 1; i >= 0; i-- ){
            let futureMaxValIndex = i;
            while(stack.length > 0){
                const [val, idx] = stack[stack.length - 1];
                if(val > temps[i]){
                    futureMaxValIndex = idx;
                    break;
                }else{
                    stack.pop();
                }
            }
            warmer[i] = futureMaxValIndex - i;
            stack.push([temps[i], i]);
        }

        return warmer;
    }
}
