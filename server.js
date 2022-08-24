
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
const python = process.env.FAVORITE_LANG;
console.log(`My favorite lang is ${python}`);
