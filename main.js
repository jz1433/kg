// given an array of integers
var nums = process.argv.slice(2).map(function(num){
  return parseInt(num, 10);
});

// write a function takes an array of integers and convert into an array of phonetic strings
// function: numberConverter
function numberConverter(numList){
  const numNameArray = [['0', 'Zero'], ['1', 'One'], ['2', 'Two'], ['3', 'Three'],
  ['4', 'Four'], ['5', 'Five'], ['6', 'Six'], ['7', 'Seven'], ['8', 'Eight'],
  ['9', 'Nine']];
  const numNameMap = new Map(numNameArray);
  var res = [];

  return res;
}

// print out the result by calling the function
