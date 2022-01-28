function subArray(field) {
  let size = 3;
  let subarray = [];
  for (let i = 0; i < Math.ceil(field.length / size); i++) {
    subarray[i] = field.slice((i * size), (i * size) + size);
  }

  return subarray;
}

function turnCheck(field) {
  for (let num of field) {
    if (num === 0) {
      return true;
    }
  }

  if (field.every(num => num !== 0)) {
    return false;
  }
}

function horizontalSum(arr) {
  let sumArr = [];
  let result;

  arr.map(el => {
    sumArr.push(el.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    }))
  })

  sumArr.map(num => {
    if (num == 3 || num == -3) {
      result = num;
    } else {
      return 0;
    }
  })

  return result;
}

function verticalSum(arr) {
  let result;
  let sumArr = [];

  outer: for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i >= 1) break outer;

      sumArr.push(arr[i][j] + arr[1][j] + arr[2][j]);
    }
  }

  sumArr.map(num => {
    if (num == 3 || num == -3) {
      result = num;
    } else {
      return 0;
    }
  })

  return result;
}

function diagonalSum(arr) {
  let returnValue;
  let result1 = 0;
  let result2 = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) result1 += arr[i][i];
  for (var i = 0; i < n; i++) result2 += arr[i][n - 1 - i];

  if (result1 === 3 || result2 === 3) {
    returnValue = 3;
  } else if (result2 === 3 || result2 === -3) {
    returnValue = -3;
  } else {
    returnValue = false;
  }

  return returnValue;
}

function gameStatus(field) {
  let arr = subArray(field);

  if (horizontalSum(arr) === 3 || verticalSum(arr) === 3 || diagonalSum(arr) === 3) {
    return 'x';
  } else if (horizontalSum(arr) === -3 || verticalSum(arr) === -3 || diagonalSum(arr) === -3) {
    return '0';
  }

  return console.log(turnCheck(field) ? 'turn' : 'end');
}
