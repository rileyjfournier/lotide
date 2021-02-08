const middle = function(arr) {
  let newArr = [];
  let middleIndex = 0;
  for (const element of arr) {
    newArr.push(element);
  }
  if (arr.length < 3) {
    console.log([]);
  } else if (arr.length >= 3 && arr.length % 2 === 0) {
    middleIndex = (newArr.length / 2) 
    console.log(newArr.slice(middleIndex - 1, middleIndex + 1))
  } else {
    middleIndex = ((newArr.length + 1) / 2)
    console.log(newArr.slice(middleIndex - 1, middleIndex))
  }
};

module.exports = middle;