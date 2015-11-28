var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function HanoiGame() {
  this.stack = [[1,2,3],[],[]];

  this.isWon = function() {
    if (this.stack[1].length === 3 || this.stack[2].length === 3){
      return true;
    }
    else { return false; }
  };

  this.isValidMove = function (startTower, endTower) {
    if (this.stack[startTower][0] < this.stack[endTower][0] ||
      this.stack[endTower].length === 0){
      return true;
    }
    return false;
  };

  this.move = function (startTower, endTower) {
    if (this.isValidMove(startTower, endTower)) {
      this.stack[endTower].unshift(this.stack[startTower].shift());
      return true;
    }
    else {
      return false;
    }
  };

  this.print = function () {
    console.log(JSON.stringify(this.stack));
  };

  this.promptMove = function (callback, completionCallback) {
    var question = "Enter your move in the form of (startTower, endTower): \n";
    reader.question(question, function (answer) {
      var startTower = parseInt(answer[1]);
      var endTower = parseInt(answer[4]);

      if (callback(startTower, endTower)) {
        if (this.isWon()) {
        completionCallback();
        } else {
          this.run(completionCallback);
        }
      } else {
        console.log("Invalid move! Try again...");
        this.promptMove(callback, completionCallback);
      }
    }.bind(this));
  };

  this.run = function(completionCallback) {
    this.print();
    this.promptMove(this.move.bind(this), completionCallback);
  };

  this.play = function(){
    this.run( function(){
        this.print();
        console.log("Congrats, you've won!");
        reader.close();
    }.bind(this));
  };
}

var game = new HanoiGame();
// game.run( function () {
//   game.print();
//   console.log("Congrats, you've won!");
//   reader.close();
// });
game.play();
