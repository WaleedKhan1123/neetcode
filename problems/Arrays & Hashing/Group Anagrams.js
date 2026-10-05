class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    isAnagram(s, t) {
    
        if (s.length!==t.length) return false;
        const keystoring = new Map();
        
        for( let n of s){
                   
            if( keystoring.has(n)){

                keystoring.set(n,keystoring.get(n)+1)

            }
            else{

                keystoring.set(n,1)
            }
        }
        
        for(let n of t){

        if(keystoring.has(n)){

            keystoring.set(n,keystoring.get(n)-1);
        }

        }

        for (const values of keystoring.values()){
            if (values!=0){

                return false
            }
        }
       return true
    }

    groupAnagrams(strs) {

        let group= []
        let count = 0;
        
    for(let s of strs){
       if(!group.some(g => g.includes(s))){
       group.push([s]);   
       for(let i=count+1;i<strs.length;i++){
        let anagram = this.isAnagram(s,strs[i]);
        if(anagram){

           group[group.length - 1].push(strs[i]);
        } 
       
         
       }
    }
        count++;

    }
     return group
    }
}



const sol = new Solution();

let strs = ["act","pots","tops","cat","stop","hat"];

console.log(sol.groupAnagrams(strs));