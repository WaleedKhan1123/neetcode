class Solution {
  encode(strs) {
    return "";     // your code
  }

  decode(str) {
    return [];     // your code
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