const repeat = (source) => {
  return source
    .split('')
    .map(character => character + character)
    .join('')
}

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