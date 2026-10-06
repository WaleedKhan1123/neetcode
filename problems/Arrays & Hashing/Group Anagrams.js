class Solution {
  groupAnagrams(strs) {
    const groups = new Map();              

    for (const s of strs) {
      const count = new Array(26).fill(0); 

      for (const ch of s) {
        count[ch.charCodeAt(0) - 97]++;    
      }

      const key = count.join(",");        

      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(s);
    }

    return [...groups.values()];
  }
}


const sol = new Solution();

let strs = ["act","pots","tops","cat","stop","hat"];

console.log(sol.groupAnagrams(strs));