/*
Numeric Literals 数字字面量
<NumericLiterals> ::=
  <DecimalLiteral> |
  <BinaryIntegerLiteral> |
  <OctalIntegerLiteral> |
  <HexIntegerLLiteral>

<Decimal> ::=
  <DecimalIntegerLiteral> "." [<DecimalDigits>] [<ExponentPart>] |
  "." <DecimalDigits> [<ExponentPart>] |
  <DecimalIntegerLiteral> [<ExponentPart>]

<DecimalIntegerLiteral> ::=
  0 |
  <NonZeroDigit> [<DecimalDigits>]

<DecimalDigits> ::=
  <DecimalDigit> |
  <DecimalDigits> <DecimalDigit>

<DecimalDigit> ::=
  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

<NonZeroDigit> ::=
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

<ExponentPart> ::=
  <ExponentIndicator> <SignedInteger>

<ExponentIndicator> ::=
  e |
  E

<SignedInteger> ::=
  <DecimalDigits> |
  "+" <DecimalDigits> |
  "-" <DecimalDigits>

<BinaryIntegerLiteral> ::=
  "0b" <BinaryDigits> |
  "0B" <BinaryDigits>

<BinaryDigits> ::=
  <BinaryDigit> |
  <BinaryDigits> <BinaryDigit>

<BinaryDigit> ::=
  0 |
  1

<OctalIntegerLiteral> ::=
  "0o" <OctalDigits> |
  "0O" <OctalDigits>

<OctalDigits> ::=
  <OctalDigit> |
  <OctalDigits> <OctalDigit>

<OctalDigit> ::=
  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

<HexIntegerLiteral> ::=
  "0x" <HexDigits> |
  "0X" <HexDigits>

<HexDigits> ::=
  <HexDigit> |
  <HexDIgits> <HexDigit>

<HexDIgit> ::=
  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "a" | "b" | "c" | "d" | "e" | "f" | "A" | "B" | "C" | "D" | "E" | "F"

*/

// /DecimalLiteral|BinaryIntegerLiteral|OctalIntegerLiteral|HexIntegerLiteral/
const patt = /(^0$)|(^[+-]?[1-9]\d*(\.\d*)?([eE][+-]?\d*)?)|(^[+-]?0?\.\d*([eE][+-]?\d+)?)|(^0[bB][01]+)|(^0[oO][0-7]+)|(^0[xX][0-9a-fA-F]+)/

module.exports = patt