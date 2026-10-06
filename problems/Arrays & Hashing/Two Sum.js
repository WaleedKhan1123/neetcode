class Solution {
  twoSum(nums, target) {
    const seen = new Map();           

    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      const need = target - n;        

      if (seen.has(need)) {
        return [seen.get(need), i];    
      }

      seen.set(n, i);                  
    }
  }
}

const sol = new Solution();

let nums=[5,5]
let target=10
console.log(sol.twoSum(nums,target))