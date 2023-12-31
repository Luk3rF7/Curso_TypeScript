const arrNumber: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrNumber);

async function promisseAsync() {
  return 1;
}

function myPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}
promisseAsync().then((resultado) => console.log(resultado + 1));
myPromise().then((resultado) => console.log(resultado + 1));
