new Array(n).fill(0)
Array.from({ length: n }, (_, i) => i)          // [0..n-1]
const grid = Array.from({ length: rows }, () => new Array(cols).fill(0));
// WRONG: new Array(rows).fill(new Array(cols)) -> all rows are the same array

arr.push(x)  arr.pop()          // end, O(1)
arr.unshift(x)  arr.shift()     // front, O(n)
arr.splice(i, 1)                // remove at i
arr.slice(i, j)  [...arr]       // copy
arr.includes(x)  arr.indexOf(x)
arr.map(x => x * 2)
arr.filter(x => x > 0)
arr.reduce((sum, x) => sum + x, 0)
arr.reverse()                   // mutates
[a, b] = [b, a];                // swap
[arr[i], arr[j]] = [arr[j], arr[i]];