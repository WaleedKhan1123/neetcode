class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

       
        let i = 0
        let j = 0
        for(let n of nums){
            
            i+=1
            j= i
            while(j<nums.length){
            if(n+nums[j]===target){

                return [nums.indexOf(n),j]
            }
            j+=1

        }
       
        
    
    }

    }
}


const sol = new Solution();

let nums=[3,4,5,6]
let target=7
console.log(sol.twoSum(nums,target))