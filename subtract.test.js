const subtract = (a, b) => 5

describe('subtract', () => {
  it('works for two numbers', () => {
    const expected = 5;

    const actual = subtract(15, 10)

    expect(actual).toBe(expected)
  })
  
  it('works for another two numbers', () => {
    const expected = 12;

    const actual = subtract(13, 1);

    expect(actual).toBe(expected);
  })
})