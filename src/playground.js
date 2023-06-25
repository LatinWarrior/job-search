const interval = setInterval(() => {
console.log(`Execute every 2 seconds...`)
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000)
