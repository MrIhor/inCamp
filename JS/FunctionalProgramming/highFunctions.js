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
    color: 'black',
    width: 10,
    height: 10
  },
  {
    color: 'blue',
    width: 25,
    height: 15
  },
  {
    color: 'blue',
    width: 25,
    height: 15
  },
  {
    color: 'black',
    width: 25,
    height: 25
  },
  {
    color: 'black',
    width: 25,
    height: 15
  },
]

// map, filter, reduce
const map = (func, context) => array => array.map(func, context);
const filter = func => array => array.filter(func);
const reduce = (initialValue, func) => array => array.reduce(func, initialValue);

// flow, compose
const flow = (...funcs) => initialValue => funcs.reduce((acc, func) => func(acc), initialValue);
const compose = (...funcs) => initialValue => funcs.reduceRight((acc, func) => func(acc), initialValue);

// or, and, all, any
const or = (predicate1, predicate2) => value => predicate1(value) || predicate2(value);
const and = (predicate1, predicate2) => value => predicate1(value) && predicate2(value);
const all = (...predicates) => value => predicates.reduce((acc, func) => acc && func(value), true);
const any = (...predicates) => value => predicates.reduce((acc, func) => acc || func(value), false);

const hasColor = color => figure => figure.color === color;
const isSquare = figure => figure.width === figure.height;
const isBlack = hasColor("black");


const square = filter(and(isSquare, isBlack))(allFigures);
// const square = map(and(hasColor('black'), isSquare))(allFigures);

console.log(square);

const isRed = hasColor("red");


const result = flow(
  filter(isRed)
)(allFigures)

// console.log(result)