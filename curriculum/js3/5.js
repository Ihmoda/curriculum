/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a=[],b, keys=Object.keys(a), idx=0)=>{
  if (idx === keys.length) return

  b(keys[idx], a[keys[idx]]);

  solution(a, b, keys, idx + 1);

}


module.exports = {
  solution
}
