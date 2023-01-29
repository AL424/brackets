module.exports = function check(str, bracketsConfig) {
  let result; 
  let resultStr = str;
  
  let i = 0;

  while (i < resultStr.length) {
    let initialLengthStr = resultStr.length;

    bracketsConfig.forEach(item => {
      if (resultStr[i] === item[0] && resultStr[i + 1] === item[1]) resultStr = resultStr.slice(0, i) + resultStr.slice(i + 2);
    })

    if (initialLengthStr === resultStr.length) i += 1;
    else i = 0;
  }

  if (resultStr === '') result = true;
  else result = false;

  return result
}
