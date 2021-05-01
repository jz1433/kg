// given an array of integers
var nums = process.argv.slice(2).map(function(num){
  return parseInt(num, 10);
});

// function to convert an array of integers into an array of phonetic strings
function numberConverter(numList){
  const numNameArray = [['0', 'Zero'], ['1', 'One'], ['2', 'Two'], ['3', 'Three'],
  ['4', 'Four'], ['5', 'Five'], ['6', 'Six'], ['7', 'Seven'], ['8', 'Eight'],
  ['9', 'Nine']];
  const numNameMap = new Map(numNameArray);
  var res = [];

  for (let i = 0; i < numList.length; i++){
    let curr = '';
    [...numList[i].toString()].forEach(c => curr += numNameMap.get(c));
    res.push(curr)
  }
  return res;
}

// print out the result by calling the function
