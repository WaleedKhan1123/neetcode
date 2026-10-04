class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    
        if (s.length!==t.length) return false;
        let index = 0
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

}

let sol = new Solution();
let s = "bbcc";
let t = "ccbb";
console.log(sol.isAnagram(s,t));
