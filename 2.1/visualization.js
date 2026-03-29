console.log("T+0ms: Start");
setTimeout(() => console.log("T+1000ms: Timeout 1"), 1000);
setTimeout(() => console.log("T+0ms: Timeout 2"), 0);
Promise.resolve().then(() => console.log("T+0ms: Microtask"));
console.log("T+0ms: End");
