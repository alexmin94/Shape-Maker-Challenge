const SVG = require('./svg');
const {Square} = require('./shapes');

describe('SVG', () => {
  let svg;

  beforeEach(() => {
    svg = new SVG();
  });

  test('renders SVG with shape and text', () => {
    const square = new Square();
    square.setColor('red');
    svg.setShape(square);
    svg.setText('ABC', 'blue');

    const expectedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect x="50" y="50" width="300" height="100" fill="red" /><text x="200" y="120" font-size="24" fill="blue" text-anchor="middle">ABC</text></svg>';
    expect(svg.render()).toEqual(expectedSvg);
  });

  test('throws an error when setting text longer than 3 characters', () => {
    const square = new Square();
    square.setColor('green');
    svg.setShape(square);

    expect(() => {
      svg.setText('Hello', 'black');
    }).toThrow('text must be less than 3 characters');
  });
});
