# Sparta-jQuery-tictactoe

## Description
This was a project to create a tic tac toe game. HTML and CSS code provided to start with and the objective was the be acheived by only editing the JavaScript code using jQuery.

## Challenges
It was challenging to create the conditions for a win. I decided to append the content of each tile to a 9 elements long array after each turn. Then I checked if all elements were matching, but not empty, for each possible combination of 3 tiles.

Although the final game worked, the code for these conditions seemed complicated and hard to display in a neat way that made it easy for a reader to understand quickly.

```js
var checkWin = [];
for (var r = 0; r <= 2; r++) { // rows
	for (var c = 0; c <= 2; c++) { // columns
 		checkWin.push($tr[r].children[c].innerText);
    }
}
```
```js
var waysToWin = [[0, 1, 2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

for (var i = 0; i < waysToWin.length; i++) {

if (checkWin[waysToWin[i][0]] === checkWin[waysToWin[i][1]] &&
    checkWin[waysToWin[i][0]] === checkWin[waysToWin[i][2]] &&
    checkWin[waysToWin[i][0]] !== "") {
...
```