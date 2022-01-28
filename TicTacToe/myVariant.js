const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const splitArr = '---+---+---' + '\n';
let player = 'X';
let winner = 'O';
let i = 0;

function lines(line) {
  return line.map(el => ` ${el} `).join('|');
}

function renderField(field) {
  let output = '';
  let size = 3;
  let subarray = [];
  for (let i = 0; i < Math.ceil(field.length / size); i++) {
    subarray[i] = field.slice((i * size), (i * size) + size);
  }

  subarray.map((el, i) => {
    output += lines(el) + '\n';
    if (i < 2) {
      output += splitArr;
    }
  })

  if (player === 'X') {
    console.log('Ход Х \n');
  } else {
    console.log('Ход О \n');
  }

  console.log(output);

  if (gameStatus()) {
    console.log(winner === 'X' ? 'Победил Х' : 'Победил О');
    endGame();
  }

  if (i === board.length) {
    console.log('Ничья');
    endGame();
  }
}

function turn(key) {
  if (typeof board[key - 1] === 'number' && (board[key - 1] !== 'X' || board[key - 1] !== 'O')) {
    board[key - 1] = player;
    i++;

    if (player === 'X') {
      player = 'O';
      winner = 'X';
    } else {
      player = 'X';
      winner = 'O';
    }
  } else {
    console.log('Это поле уже занято');
  }
}

function gameStatus() {
  if ((board[0] == board[4] && board[4] == board[8]) || (board[2] == board[4] && board[4] == board[6])
    || (board[0] == board[1] && board[1] == board[2]) || (board[3] == board[4] && board[4] == board[5])
    || (board[6] == board[7] && board[7] == board[8]) || (board[0] == board[3] && board[3] == board[6])
    || (board[1] == board[4] && board[4] == board[7]) || (board[2] == board[5] && board[5] == board[8])) {
    return 1;
  }
}

function endGame() {
  process.exit();
}

function startGame() {
  renderField(board);
  gameStatus(board);

  rl.on("line", (input) => {
    if (input == 'q') endGame();

    if (input > 0 && input <= 9) {
      turn(input);
      renderField(board);
    } else {
      console.log('Укажите номер поля')
    }
  });
}

startGame();