const field = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
]

const x = 'x';
const y = '0';
const o = ' ';

function lines(arr) {
  let mas = [];

  arr.map(el => {
    if (el == -1 && typeof (el) == 'number') {
      mas.push(` ${y} `);
    } else if (el == 1 && typeof (el) == 'number') {
      mas.push(` ${x} `);
    } else {
      mas.push(` ${o} `);
    }
  })

  return mas.join('|');
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
      output += '---+---+---' + '\n';
    }
  })

  return output;
}




