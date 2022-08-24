const FAVORITE_LANG = process.env.python;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('python rock!');
    await sleep(5000);
  }
}

main();


