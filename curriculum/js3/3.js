/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a, idx=1, countObject={}, result=[])=>{
  if(idx === a.length) return result
  if(idx === 1) countObject[a[0]] === 1;

  countObject[a[idx]] = a[idx] in countObject ? countObject[a[idx]] + 1 : 1

  if(countObject[a[idx]] === 1){
    result.push(a[idx]);
  }

  return solution(a, idx +1, countObject, result);
}

module.exports = {
  solution
}
