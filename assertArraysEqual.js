const eqArrays = function(arr1, arr2) {
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

eqArrays([1,2,3], [1,2,3]);
eqArrays([1,2,3], [1,2,"3"]);
eqArrays([1,2,3], [0,2,3]);
eqArrays([1,2,3], [1,2,3,4]);
eqArrays(['one',2,"three"], ['one',2,"three"]);