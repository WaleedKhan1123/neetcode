res.push(path)       // WRONG in backtracking -> res.push([...path])
if (idx) { }         // bug when idx is 0 -> use idx !== -1
[1,2] === [1,2]      // false (compares references)
"5" + 1              // "51"   vs   +"5" + 1 -> 6
grid.map(row => [...row])   // copy a 2D grid