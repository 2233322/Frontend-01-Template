/**
 String Literal 字符串字面量
<StringLiteral> ::=
  """ [<DoubleStringCharacters>] """ |
  "'" [<SingleStringCharacters>] '''

<DoubleStringCharacters> ::=
  <DoubleStringCharacter> [<DoubleStringCharacter>]

<SingleStringCharacters> ::=
  <SingleStringCHarater> [<SingleStringCHarater>]

<DoubleStringCharacter> ::=
  <SourceCharacter>  ...but one of " or \ or LineTerminator |
  LS |
  PS |
  "\" <EscapeSequence> |
  <LineContinuation>

<SingleStringCHarater> ::=
  <SourceCharacter>  ...but one of ' or \ or LineTerminator |    /TODO/
  LS |
  PS |
  "\" <EscapeSequence> |
  <LineContinuation>

<LineContinuation> ::=
  "\" <LineTerminatorSequence>

<EscapeSequence> ::=
  <CharacterEscapeSequence> |
  "0" [lookahead ∉ DecimalDigit] |    /TODO/
  <HexEscapeSequence> |
  <UnicodeEscapeSequence>

<CharacterEscapeSequence> ::=
  <SingleEscapeCharacter> |
  <NonEscapeCharacter>

<SingleEscapeCharacter> ::=
  "'" | """ | "\" | "b" | "f" | "n" | "r" | "t" | "v"

<NonEscapeCharacter> ::=
  <SourceCharacter> ...but not one of <EscapeCharacter> or <LineTerminator>    /TODO/

<EscapeCharacter> ::=
  <SingleEscapeCharacter> |
  <DecimaDigit> |
  "x" |
  "u"

<HexEscapeSequence> ::=
  "x" <HexDigit> <HexDigit>

<UnicodeEscapeSequence> ::=
  "u" <Hex4Digits> |
  "u" {<CodePoint>}

<Hex4Digits> ::=
  <HexDigit> <HexDigit> <HexDigit> 
 */

// "Buddy, you're a boy make a big noise Playing in the streets gonna be a big man someday"
// 'Buddy, youre a boy make a big noise Playing in the streets gonna be a big man someday'

const parrt = /^\"[^\"\r\n]*\"$|^\'[^\'\r\n]*\'$/
// TODO 还有些情况不会写