// already defined on LeetCode/NeetCode:
// ListNode { val, next }   TreeNode { val, left, right }

let cur = head;
while (cur) { cur = cur.next; }

const dummy = new ListNode(0);
let tail = dummy;
tail.next = new ListNode(5);
tail = tail.next;
return dummy.next;

// reverse a list
let prev = null, cur2 = head;
while (cur2) {
  const next = cur2.next;
  cur2.next = prev;
  prev = cur2;
  cur2 = next;
}
return prev;

// tree DFS
function dfs(node) {
  if (!node) return 0;
  return 1 + Math.max(dfs(node.left), dfs(node.right));
}