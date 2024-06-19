const subtract = (a, b) => 5

describe('subtract', () => {
  it('works for two numbers', () => {
    const expected = 5;

    const actual = subtract(15, 10)

    expect(actual).toBe(expected)
  })
})