const flatten = function(arr) {
  let newArr = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const val of element) {
        newArr.push(val);
      }
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};


module.exports = flatten;