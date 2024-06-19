const repeat = (source) => source + source;

describe('repeat function', () => {
  it('repeats a single character', () => {
    const expected = 'aa';

    const actual = repeat('a')

    expect(actual).toBe(expected)
  })
})