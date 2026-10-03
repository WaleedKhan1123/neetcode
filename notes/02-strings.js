s.length   s[i]   s.at(-1)            // last char
s.slice(i, j)                         // [i, j)
s.indexOf("a")  s.includes("ab")
s.toLowerCase()  s.toUpperCase()  s.trim()
s.split("")      s.split(" ")    s.split(/\s+/)
arr.join("")
[...s].reverse().join("")             // reverse a string
[...s].sort().join("")                // "eat" -> "aet" (anagram key)

// strings are immutable: build with an array, then join
const parts = []; parts.push("a"); parts.join("");

for (const ch of s) { }
s.charCodeAt(i) - 97                  // 'a'->0 ... 'z'->25
String.fromCharCode(97)               // "a"
/[a-z0-9]/i.test(ch)                  // alphanumeric?
`${r},${c}`                           // template string (great for keys)