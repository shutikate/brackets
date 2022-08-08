module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.flat();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let bracketsIndex = brackets.indexOf(str[i]);
    if (arr.length !== 0 && str[i] === brackets[arr[arr.length - 1]]) {
      arr.pop();
    } else if (bracketsIndex % 2 === 0) {
      arr.push(bracketsIndex + 1);
    } else {arr.push(bracketsIndex)} 
  }
  if (arr.length === 0) {
    return true;
  }
  return false;
}

