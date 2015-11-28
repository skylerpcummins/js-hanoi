function Clock() {
  var now = new Date();
  this.hrs = now.getHours();
  this.mins = now.getMinutes();
  this.secs = now.getSeconds();


  setInterval(this._tick.bind(this), 1000);

}

Clock.prototype.printTime = function () {
  //takes unformatted time, formats, prints (console.log())
  if(this.secs > 59){
    this.mins++;
    this.secs -= 60;
  }
  if(this.mins > 59){
    this.hrs++;
    this.mins -= 60;
  }
  if(this.hrs > 23){
    this.hrs -=24;
  }

  console.log(this.hrs+":"+this.mins+":"+this.secs);

};

Clock.prototype._tick = function () {
  this.secs++;
  this.printTime();
  // add 1 sec to time
  // call printTime
};

// var clock = new Clock();

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0) {
    reader.question("Please enter a number: ", function (answer) {
      var newNum = parseInt(answer);
      console.log("Running sum = " + (sum + newNum));
      addNumbers(sum += newNum, numsLeft -= 1, completionCallback);
    });
  }
  else if(numsLeft === 0) {
    return completionCallback(sum);
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
