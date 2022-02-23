const allFigures = [
  {
    color: 'red',
    width: 25,
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
    width: 40,
    height: 40
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
    color: 'red',
    width: 25,
    height: 15
  },
  {
    color: 'red',
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
const getArea = square => square.width * square.height;
const getPerimeter = rectangle => (rectangle.width + rectangle.height) * 2;
const getMax = (areas, initialValue) => Math.max(initialValue, areas);
const getSum = (perimeter, initialValue) => perimeter + initialValue;


const isSquare = figure => figure.width === figure.height;
const isRectangle = figure => figure.width !== figure.height;

const isBlack = hasColor("black");
const isRed = hasColor("red");

// get max square area
const blackSquares = figures => filter(and(isSquare, isBlack))(figures);
const squareAreas = squares => map(getArea)(squares);
const maxArea = areas => reduce(0, getMax)(areas)

const maxSquareArea = flow(
  blackSquares,
  squareAreas,
  maxArea
)(allFigures)

console.log('Max square area:', maxSquareArea);

// get sum of rectangles perimeter
const redRectangles = figures => filter(and(isRectangle, isRed))(figures);
const rectanglePerimeters = rectangles => map(getPerimeter)(rectangles);
const sumPerimeters = perimeters => reduce(0, getSum)(perimeters);

const sumOfRectanglePerimeters = compose(
  sumPerimeters,
  rectanglePerimeters,
  redRectangles
)(allFigures)

console.log('Sum of rectangle perimeters:', sumOfRectanglePerimeters);
