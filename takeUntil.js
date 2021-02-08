const assertArraysEqual = function(arr1, arr2) {
  let eqChecker = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      eqChecker += 1;
    } 
  }
  if (eqChecker === arr1.length && eqChecker === arr2.length) {
    console.log(`${arr1} is equal to ${arr2}`);
  } else {
    console.log(`${arr1} is NOT equal to ${arr2}`);
  }
};


const takeUntil = (arr, callback) => {
  const newArr = [];
  for (let ele of arr) {
    if (callback(ele)){
      break;
    }
    newArr.push(ele)
  }
  return newArr;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;