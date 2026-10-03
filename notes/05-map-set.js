const map = new Map();
map.set(k, v)  map.get(k)  map.has(k)  map.delete(k)  map.size
map.set(x, (map.get(x) || 0) + 1);       // counting
if (!map.has(k)) map.set(k, []);
map.get(k).push(item);                   // grouping
for (const [k, v] of map) { }
[...map.values()]

const set = new Set(nums);
set.add(x)  set.has(x)  set.delete(x)  set.size
[...set]                                 // back to array

// arrays as keys DON'T work -> use strings
visited.add(`${r},${c}`);