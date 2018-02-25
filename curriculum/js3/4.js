/* 
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a=[],b=0, idx=0, countObject={})=> {
  const difference = b - a[idx]

  if (idx === a.length) return false

  if(difference in countObject) return true

  countObject[a[idx]] = true

  return solution(a, b, idx+1, countObject);

}


module.exports = {
  solution
}
