/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj, keys = Object.keys(obj), idx = 1, max=obj[keys[0]]) => {
  const key = keys[idx]

  if(idx === keys.length) return max;

  if(obj[key] > max) max = obj[key];

  return solution(obj, keys, idx+1,max);

};


module.exports = {
  solution,
};
