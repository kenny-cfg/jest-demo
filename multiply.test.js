const multiply = (a, b) => a * b;

describe('multiply', () => {
  it('will multiply two numbers', () => {
    const expected = 256;
    
    const actual = multiply(16, 16)
    
    expect(actual).toBe(expected)
  })
})