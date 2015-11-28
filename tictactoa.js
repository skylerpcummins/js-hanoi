function Board() {
  this.grid = [['x', null, null], [null, 'x', null], [null, null, 'x']];

  this.print = function () {
    var line = "";
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (this.grid[i][j] === null) {
          line += "|_|";
        } else {
          line += "|" + this.grid[i][j] + "|";
        }
      }
      line += "\n";
    }
    console.log(line);
  };

  this.won = function () {
    return this.horiz || this.verts || this.diagZ;
  };

  this.horiz = function () {
    for (var i = 0; i < this.grid.length; i++) {
      var row = this.grid[i];
      if ( row.indexOf(null) === -1 &&
        (row.indexOf('o') === -1 || row.indexOf('x') === -1 )) {
        return true;
      }
    }
    return false;
  };

  this.verts = function () {
    for (var i = 0; i < 3; i++) {
      if (this.grid[0][i] === "x" && this.grid[1][i] === "x" && this.grid[2][i] === "x") {
        return true;
      } else if (this.grid[0][i] === "o" && this.grid[1][i] === "o" && this.grid[2][i] === "o") {
        return true;
      }
    }
    return false;
  };

  this.diagZ = function () {
    var forwardDiag = [this.grid[0][0], this.grid[1][1], this.grid[2][2]];
    var backwardDiag = [this.grid[0][2], this.grid[1][1], this.grid[2][0]];
    console.log(forwardDiag);
    var oWins = ['o', 'o', 'o'];
    var xWins = ['x', 'x', 'x'];
    if (forwardDiag === oWins || forwardDiag === xWins){
      return true;
    }
    else if ((backwardDiag === oWins || backwardDiag === xWins)){
      return true;
    }
    return false;
  };

  this.winner = function () {

  };

  this.empty = function (pos) {

  };

  this.placeMark = function (pos, mark) {

  };

}

var b = new Board();
b.print();
console.log(b.diagZ());
