/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  for (let i = 0, l = s.length; i < l; i++) {
    let item = s[i]
    if (item === '(' || item === '{' || item === '[') {
      stack.push(item)
      continue
    }
    if (stack.length === 0) {
      return false
    }
    let last = stack[stack.length - 1]
    if ((last === '(' && item === ')') || (last === '{' && item === '}') || (last === '[' && item === ']')) {
      stack.pop()
    } else {
        return false
    }
  }
  return stack.length === 0

};