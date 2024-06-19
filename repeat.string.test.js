const repeat = (source) => source + source;

describe('repeat function', () => {
  it('repeats a single character', () => {
    const expected = 'aa';

    const actual = repeat('a')

    expect(actual).toBe(expected)
  })
  
  it('repeats a string', () => {
    const expected = 'aabbcc'

    const actual = repeat('abc')

    expect(actual).toBe(expected)
  })
})