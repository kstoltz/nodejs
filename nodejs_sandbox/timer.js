const stopTimer = callback => {
  setTimeout(() => {
    callback('...Done!');
  },5000)
}

setTimeout(() => {
  console.log('Start Timer...');
  stopTimer(text => {
    console.log(text);
  });
},2000);

console.log('Hello World!');
