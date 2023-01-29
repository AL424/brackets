module.exports = function check(str, bracketsConfig) {
  let result; 
    
  let i = 0;

  while (i < str.length) {
    let initialLengthStr = str.length;

    bracketsConfig.forEach(item => {
      if (str[i] === item[0] && str[i + 1] === item[1]) str = str.slice(0, i) + str.slice(i + 2);
    })

    if (initialLengthStr === str.length) i += 1;
    else i = 0;
  }

  if (str === '') result = true;
  else result = false;

  return result
}
