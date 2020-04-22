const patt = require('../src/matchAllNumber')

test('match all decimal literal', () => {
  ['0', '1000', '+1000', '-1000', '1000.', '1000.3e22', '1000.123E-2', '.123', '0.123e-3', '-0.123e-3'].forEach(str => {
    expect(str.match(patt)[0]).toBe(str)
  })
})

test('match all binary integer literal', () => {
  ['0b1101', '0b1111', '0B1101', '0B1111'].forEach(str => {
    expect(str.match(patt)[0]).toBe(str)
  })
})

test('match all octal integer literal', () => {
  ['0o0756', '0o7700', '0O0756', '0O7700'].forEach(str => {
    expect(str.match(patt)[0]).toBe(str)
  })
})

test('match all hex integer literal', () => {
  ['0x019afAF', '0xafeb', '0X019afAF', '0Xafeb'].forEach(str => {
    expect(str.match(patt)[0]).toBe(str)
  })
})