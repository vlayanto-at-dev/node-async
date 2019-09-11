function execution() {
  (async () => {
    const result = await myAsync();
    console.log(result);
    console.log('DONE', process.uptime());
  })();
}

async function myAsync() {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(10);
    }, 5000);
  });
  console.log(process.uptime());
  return promise;
}

module.exports = {
  execution,
  myAsync
};
