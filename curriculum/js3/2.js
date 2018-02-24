/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @param return {number}
 */

const solution = (arr, idx=1, counterObject={}, mostCommon=arr[0])=>{

  if (Object.keys(counterObject).length === 0) counterObject[arr[0]] = 1

  if (idx === arr.length) return mostCommon

  counterObject[arr[idx]] = arr[idx] in counterObject ? counterObject[arr[idx]] + 1 : 1

  if (counterObject[arr[idx]] > counterObject[mostCommon]){
    mostCommon = arr[idx];
  }

  return solution(arr, idx+1, counterObject, mostCommon)

}

module.exports = {
  solution
}
