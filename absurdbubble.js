var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
  var question = "Is " + el1 + " greater than " + el2 + "?\n";
  reader.question(question, function (answer) {
    if (answer === 'yes'){
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
      if (isGreaterThan) {
        var num1 = arr[i];
        var num2 = arr[i+1];
        arr[i] = num2;
        arr[i+1] = num1;
        madeAnySwaps = true;
      }
      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}


function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else{
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
