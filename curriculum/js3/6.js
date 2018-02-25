/* 
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true. 
 * Example: 
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/

const solution = (a, b, keys = Object.keys(a), idx = 0, filteredResult = {}) => {
  if (idx === keys.length) {
    return filteredResult;
  }

  if (b(keys[idx], a[keys[idx]])) {
    filteredResult[keys[idx]] = a[keys[idx]];
  }

  return solution(a, b, keys, idx + 1, filteredResult);
};
module.exports = {
  solution
};
