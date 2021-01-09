// https://codepen.io/pottersson/pen/rusvC

var terrainLetters2Classes = {
    '~': 'spacer',
    ' ': 'water',
    'L': 'lumber',
    'W': 'wheat',
    'O': 'ore',
    'S': 'sheep',
    'C': 'clay',
}

var exampleboard = [
    '~~    ',
    '~ LWO ',
    '~ SCLW ',
    ' OSCWL ',
    '~ COSL ',
    '~ WCL ',
    '~~    ',
];

angular.module('catan', []).controller('Board', function Board() {
    
this.board = [];
for(var r = 0; r < exampleboard.length; r++) {
    this.board[r] = [];
    for(var c = 0; c < exampleboard[r].length; c++) {
    this.board[r][c] = {
        class: terrainLetters2Classes[exampleboard[r][c]],
        letter: exampleboard[r][c],
        }
    }
    }
});