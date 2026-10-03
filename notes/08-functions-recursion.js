function add(a, b) { return a + b; }
const add2 = (a, b) => a + b;

// backtracking shape (Subsets, Permutations, Combination Sum)
function subsets(nums) {
  const res = [], path = [];
  function dfs(i) {
    if (i === nums.length) { res.push([...path]); return; } // push a COPY
    path.push(nums[i]);
    dfs(i + 1);
    path.pop();
    dfs(i + 1);
  }
  dfs(0);
  return res;
}

// memoization (DP)
const memo = new Map();
function f(n) {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n);
  const val = f(n - 1) + f(n - 2);
  memo.set(n, val);
  return val;
}