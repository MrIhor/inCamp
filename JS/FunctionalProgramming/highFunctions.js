const allFigures = [
  {
    color: 'red',
    width: 5,
    height: 5
  },
  {
    color: 'black',
    width: 15,
    height: 10
  },
  {
    color: 'green',
    width: 10,
    height: 15
  },
  {
    color: 'black',
    width: 20,
    height: 20
  },
  {
    color: 'red',
    width: 5,
    height: 10
  },
  {
    color: 'green',
    width: 10,
    height: 5
  },
  {
    color: 'blue',
    width: 25,
    height: 15
  },

]

const hasColor = color => figure => figure.color === color;
const map = (func, context) => array => array.map(func, context);

console.log(hasColor('red')(allFigures[4]));
console.log(map(hasColor('black'))(allFigures));