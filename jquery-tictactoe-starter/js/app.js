$(document).ready(function(){

  var $td = $("td");
  var $h2 = $('h2');
  var $button = $('button');
  var $tr = $('tr');

  var turnCounter = 0;

  // RESET BUTTON - should find a way to target the button's ID rather than all buttons.
  $button.click(resetBoard);
  function resetBoard() {
    $td.text("");
    $td.removeClass('X');
    $td.removeClass('O');
  }


  // TAKE TURN - If an even amount of turns have been played, pus an X where the user clicks. Otherwise, place a O where the user clicks.
  $td.click(takeTurn);
  function takeTurn(){
    if ((turnCounter % 2) == 0) {
      $(this).addClass('X');
      $(this).append('X');
      $h2.text("It is O's turn");
    } else {
      $(this).addClass('O');
      $(this).append('O');
      $h2.text("It is X's turn");
    }
    turnCounter++;

    // This creates an array containing what has been entered into the grid so far
    var checkWin = [];
    for (var r = 0; r <= 2; r++) {
      for (var c = 0; c <= 2; c++) {
        checkWin.push($tr[r].children[c].innerText);
      }
    }

    // WIN CONDITIONS
    // waysToWin contains an array for each row, each column and each diag
    var waysToWin = [[0, 1, 2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

    // for each possible way to win...
    for (var i = 0; i < waysToWin.length; i++) {

      // ... check if The following is a way to compare if three elements are the same (allbiet longhanded)
      if (checkWin[waysToWin[i][0]] === checkWin[waysToWin[i][1]] &&
         checkWin[waysToWin[i][0]] === checkWin[waysToWin[i][2]] &&
         checkWin[waysToWin[i][0]] !== "") {

        //If all three elements in one of the ways to win are the same and not empty, do the following...
        switch (true) {
          case (turnCounter % 2 === 1):
            alert('The winner is X\'s!');
            resetBoard();
            break;
          case (turnCounter % 2 === 0):
            alert('The winner is O\'s!');
            resetBoard();
            break;
        } // end switch
      } // end if
    }
  }

});
