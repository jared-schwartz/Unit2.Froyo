
const input = prompt("Enter a list of comma-separated froyo flavors:");


const flavorsArray = input.split(',').map(flavor => flavor.trim());


const flavorCount = {};


flavorsArray.forEach(flavor => {
  if (flavorCount[flavor]) {
    flavorCount[flavor]++;
  } else {
    flavorCount[flavor] = 1;
  }
});


console.table(flavorCount);

