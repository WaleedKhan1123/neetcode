const stack = [];
stack.push(x);  stack.pop();  stack[stack.length - 1];  // peek
stack.length === 0                                      // empty

// BFS level by level
const queue = [root];
while (queue.length) {
  const size = queue.length;
  for (let i = 0; i < size; i++) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

// grid directions
const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
for (const [dr, dc] of dirs) {
  const nr = r + dr, nc = c + dc;
  if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;
}