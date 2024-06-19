const sum = (a, b) => a + b;

describe('sum function', () => {
  it('adds two numbers', () => {
    const expected = 3;
    
    const actual = sum(1, 2);

    expect(actual).toBe(expected);
  })
  
  it('deals with negative numbers', () => {
    const expected = 5;
    
    const actual = sum(10, -5);

    expect(actual).toBe(expected);
  })
})
