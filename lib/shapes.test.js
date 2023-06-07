const { Square, Circle, Triangle } = require('./shapes');

describe('Square', () => {
  let square;

  beforeEach(() => {
    square = new Square();
  });

  it('should have an empty color by default', () => {
    expect(square.color).toBe('');
  });

  it('should set the color correctly', () => {
    square.setColor('blue');
    expect(square.color).toBe('blue');
  });

  it('should render the square SVG code with the correct color', () => {
    square.setColor('red');
    expect(square.render()).toBe('<rect x="50" y="50" width="300" height="100" fill="red" />');
  });
});

describe('Circle', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle();
  });

  it('should have an empty color by default', () => {
    expect(circle.color).toBe('');
  });

  it('should set the color correctly', () => {
    circle.setColor('green');
    expect(circle.color).toBe('green');
  });

  it('should render the circle SVG code with the correct color', () => {
    circle.setColor('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue"/>');
  });
});

describe('Triangle', () => {
  let triangle;

  beforeEach(() => {
    triangle = new Triangle();
  });

  it('should have an empty color by default', () => {
    expect(triangle.color).toBe('');
  });

  it('should set the color correctly', () => {
    triangle.setColor('yellow');
    expect(triangle.color).toBe('yellow');
  });

  it('should render the triangle SVG code with the correct color', () => {
    triangle.setColor('green');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="green"/>');
  });
});
