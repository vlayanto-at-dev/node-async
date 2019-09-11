const { myAsync, execution } = require('./myAsync');

// let result = null;
// (async () => {
//   result = await myAsync();
//   console.log('Result: ', result);
// })();

// async function wrapper() {
//   myAsync().then(result => {
//     console.log(result);
//     console.log('Done');
//   });
// }
execution();

// wrapper();
console.log('This is shown first');

process.on('beforeExit', code => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', code => {
  console.log('Process exit event with code: ', code);
});
