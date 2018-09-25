module.exports = function check(str, bracketsConfig){
  console.log(str);
  var count = 0;
  var found = 1;
  while(found == 1){
    found = 0;
    for( var j=0; j < bracketsConfig.length;j++){
      var arr = str.split(bracketsConfig[j][0]+bracketsConfig[j][1]);
      if(arr.length > 1){
        count++
        found = 1;
        str = arr.join('');
      }
    }
  }
  var result = false;
  if(str == ''){
    result = true;
  }
  console.log(result);
  return result;
}