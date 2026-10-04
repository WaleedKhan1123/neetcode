class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

       
        let count = 0
        for(let n of nums){
            
            count+=1
          
            while(count<=nums.length){
            if(n+nums[count]===target){

                return [nums.indexOf(n),count]
            }
            count+=1

        }
        count=nums.indexOf(n)+1
        
    
    }

    }
}


const sol = new Solution();

let nums = [4,5,6];
let target = 9
console.log(sol.twoSum(nums,target))