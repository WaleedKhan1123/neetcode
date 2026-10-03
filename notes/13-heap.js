const pq = new MinPriorityQueue();   // or MaxPriorityQueue
pq.enqueue(5);
pq.dequeue();
pq.front();  pq.size();  pq.isEmpty();
const pq2 = new PriorityQueue((a, b) => a[0] - b[0]);  // custom order