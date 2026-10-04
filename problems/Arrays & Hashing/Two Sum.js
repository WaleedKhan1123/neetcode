class Solution {
  twoSum(nums, target) {
    const seen = new Map();            // number → its index

    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      const need = target - n;         // the partner we're looking for

      if (seen.has(need)) {
        return [seen.get(need), i];    // partner's index, current index
      }

      seen.set(n, i);                  // remember this number for later
    }
  }
}

const sol = new Solution();

let nums=[5,5]
let target=10
console.log(sol.twoSum(nums,target))