const net = require("net");

const clients = [];
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let moves = 0;
let currentChar = 'X';
let playerX;
let playerO;
let updateLayout;

function gameBoard(field) {
  let gameField = ` 
  ${field[0]} | ${field[1]} | ${field[2]}
  --+---+-- 
  ${field[3]} | ${field[4]} | ${field[5]}
  --+---+--
  ${field[6]} | ${field[7]} | ${field[8]}\n`;

  return gameField;
}

function fillCell(field, currentChar, input) {
  return (field[input - 1] = currentChar);
}

function winner(field) {
  if (
    (field[0] === field[1] && field[1] === field[2]) ||
    (field[3] === field[4] && field[4] === field[5]) ||
    (field[6] === field[7] && field[7] === field[8]) ||
    (field[0] === field[4] && field[4] === field[8]) ||
    (field[2] === field[4] && field[4] === field[6]) ||
    (field[0] === field[3] && field[3] === field[6]) ||
    (field[1] === field[4] && field[4] === field[7]) ||
    (field[2] === field[5] && field[5] === field[8])
  ) {
    return true;
  }

  return false;
}

function changeChar() {
  return currentChar = currentChar === 'X' ? 'O' : 'X';
}

function changeCurrentPlayer() {
  let swicthPlayer = playerX;
  playerX = playerO;
  playerO = swicthPlayer;
}

function game(currentPlayer, secondPlayer, input, field) {
  if (input !== undefined && 1 <= input <= 9 && !isNaN(input)) {
    let cell = field[input - 1];
    if (cell !== "X" && cell !== "O") {
      fillCell(field, currentChar, input);
      currentPlayer.write(gameBoard(field));
      secondPlayer.write(gameBoard(field));
      moves++;
      if (winner(field) || moves === 9) {
        if (winner(field)) {
          currentPlayer.write(`Вы победили!`);
          secondPlayer.write(`Вы проиграли(`);
          moves = 0;
        } else {
          currentPlayer.write(`Ничья!`);
          secondPlayer.write(`Ничья!`);
          moves = 0;
        }
      } else {
        currentPlayer.write("\nОжидайте хода вашего противника\n");
      }
      changeCurrentPlayer();
      changeChar();
    } else {
      currentPlayer.write("\nЭта ячейка уже занята. Выберите другую\n");
    }
  } else {
    currentPlayer.write("\nВведите валидное значение!\n");
  }
}

const server = net.createServer((socket) => {
  clients.push(socket);
  const port = socket.remotePort;
  const ip = socket.remoteAddress;
  console.log(`Игрок ${ip}:${port} подключился`);
  playerX = clients[0];
  playerO = clients[1];
  updateLayout = [...board];

  if (clients.length < 2) {
    socket.write('\nОжидаем второго игрока\n');
  }

  if (clients.length === 2) {
    clients.forEach(client => {
      if (client === playerX) {
        playerX.write('\nДобро пожаловать в игру Крестики | Нолики\n');
        playerX.write(gameBoard(updateLayout));
        playerX.write(`\nВы играете за Х\nВаш ход, выберите ячейку 1-9\n`);
      } else {
        playerO.write('Добро пожаловать в игру Крестики | Нолики');
        playerO.write(gameBoard(updateLayout));
        playerO.write(`\nВы играете за O\nОжидайте хода противника\n`);
      }
    })
  }

  socket.on('data', message => {
    if (socket === playerX) {
      game(playerX, playerO, Number(message), updateLayout);
      if (!winner(updateLayout) && moves > 0) {
        playerX.write('\nТвой ход\n');
        if (moves === 1) {
          playerX.write('Выберите ячейку 1-9\n');
        }
      }
    } else {
      socket.write('\nСейчас не ваш ход. Подождите\n');
    }
  })

  socket.on("close", () => {
    let index = clients.indexOf(socket);
    clients.splice(index, 1);
    console.log(`Игрок ${ip}:${port} вышел`);
  });
});

server.maxConnections = 2;
server.listen(1337, "10.177.1.15");

server.on("listening", () => {
  console.log("Listening on", server.address());
});