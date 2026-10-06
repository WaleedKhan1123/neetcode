class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const list = new Map();
    
        for(let s of nums){
        
            if(!list.has(s)){

            list.set(s,1);

            }

            else{
            list.set(s,list.get(s)+1);

            }
             

        }
       
      
       return [...list.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(pair => pair[0]);
      
       
    }


}

let sol = new Solution();
let nums = [1,2,2,3,3,3];
let  k = 2;
console.log(sol.topKFrequent(nums,k));