class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
 
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    const output = new Array(n);
    for (let i = 1; i < n; i++) {
      left[i] = left[i - 1] * nums[i - 1];
      
    }
             
    
    for(let i=n-2;i>=0;i--){
     right[i]=right[i+1]*nums[i+1];

    }

     for (let i = 0; i < n; i++) {
      output[i] = left[i] * right[i];
    }
   return output;
 }

}


let sol = new Solution();

let nums = [1,2,4,6]
console.log(sol.productExceptSelf(nums));