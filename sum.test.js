const sum = (a, b) => a + b;

describe('sum function', () => {
  it('adds two numbers', () => {
    const expected = 3;
    
    const actual = sum(1, 2);

    expect(actual).toBe(expected);
  })
})