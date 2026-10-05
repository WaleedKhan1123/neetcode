class Solution {
  groupAnagrams(strs) {
    const groups = new Map();              // label → list of words

    for (const s of strs) {
      const count = new Array(26).fill(0); // one slot per letter a–z

      for (const ch of s) {
        count[ch.charCodeAt(0) - 97]++;    // 'a' → 0, 'b' → 1, ... 'z' → 25
      }

      const key = count.join(",");         // the label, e.g. "1,0,1,0,...,1,..."

      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(s);
    }

    return [...groups.values()];
  }
}


const sol = new Solution();

let strs = ["act","pots","tops","cat","stop","hat"];

console.log(sol.groupAnagrams(strs));