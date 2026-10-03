class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

     
     const s = new Set();
    
     for(let n of nums){

        if(s.has(n)) return true;
        s.add(n)

     }

     return false;

    }
}
let sol = new Solution();

let arr = [1, 2, 3, 4, 5, 3,6,9];
console.log(sol.hasDuplicate(arr));


