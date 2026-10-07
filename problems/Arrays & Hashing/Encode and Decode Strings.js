class Solution {
encode(strs) {
  let res = "";
  for (const s of strs) {
    res += s.length + "#" + s;
  }
  return res;
}

  decode(str) {
   let res = [];

   let i =0;
   
   while (i<str.length){
   
     const j = str.indexOf("#",i);

     const len = parseInt(str.slice(i,j));

     const word = str.slice(j+1,(j+1)+len);

     res.push(word);
     
     i = (j+1)+len;

   }


    
    return res;     // your code
  }
}

const sol = new Solution();

function test(strs) {
  const encoded = sol.encode(strs);
  const decoded = sol.decode(encoded);

  console.log("input:   ", JSON.stringify(strs));
  console.log("encoded: ", JSON.stringify(encoded));
  console.log("decoded: ", JSON.stringify(decoded));
  console.log("correct? ", JSON.stringify(decoded) === JSON.stringify(strs));
  console.log("---");
}

test(["Hello", "World"]);
test([""]);
test([]);
test(["a,b", "c"]);
test(["", ""]);
test(["#3#abc", "x"]);