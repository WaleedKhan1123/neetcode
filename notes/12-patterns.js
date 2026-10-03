// two pointers
let l = 0, r = nums.length - 1;
while (l < r) {
  if (nums[l] + nums[r] < target) l++;
  else r--;
}

// sliding window
let left = 0, best = 0;
const seen = new Set();
for (let right = 0; right < s.length; right++) {
  while (seen.has(s[right])) { seen.delete(s[left]); left++; }
  seen.add(s[right]);
  best = Math.max(best, right - left + 1);
}

// binary search
let lo = 0, hi = nums.length - 1;
while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (nums[mid] === target) return mid;
  if (nums[mid] < target) lo = mid + 1;
  else hi = mid - 1;
}
return -1;