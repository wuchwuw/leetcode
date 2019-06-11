/**
 * @param {string} digits
 * @return {string[]}
 */
const map = [
  '',
  '',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz'
]
var letterCombinations = function(digits) {
  if (digits === '') return []
  let res = []
  findCombination(digits, 0, '', res)
  return res
};

function findCombination(digits, index, s, res) {
  if (index === digits.length) {
    res.push(s)
    return
  }
  let c = digits[index]
  let letters = map[c]
  for (let i = 0; i < letters.length; i ++) {
    findCombination(digits, index + 1, s + letters[i], res)
  }
  return
}