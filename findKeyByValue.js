
const findKeyByValue = function(obj, val) {
  // let newArr = Object.keys(obj);      // our newArr = [x, z, y,...n]
  for (const genre in obj) {          // for every key of our obj
    if (obj[genre] === val) {         // if our obj[key] value === given val
      return genre;              // return the key name
    }
  }
};


module.exports = findKeyByValue;