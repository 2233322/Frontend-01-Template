export class QueryString {

  /**
   * url
   * @var string
   */
  input: string
  location: Object

  constructor(input: string) {
    if (typeof input !== 'string') {
      throw new TypeError('The url must be a string!')
    }
    this.input = input.trim()
    this.location = {
      hash: this.getHash(),
      url: this.removeHash().split('?')[0] || '',
      href: this.input,
      query: this.parse(this.extract()),
      path: this.getPathname(),
      protocol: this.getProtocol()
    }
  }

  private getProtocol() {
    const match = this.input.match(/^(.*):\/\//)
    return match ? match[1] : 'http'
  }


  private removeHash() {
    const hashStart = this.input.indexOf('#')
    if (hashStart !== -1) {
      return this.input.slice(0, hashStart)
    }
    return this.input
  }

  private getHash() {
    let hash = ''
    const hashStart = this.input.indexOf('#')
    if (hashStart !== -1) {
      hash = this.input.slice(hashStart)
    }
    return hash
  }

  public extract() {
    const removeHashInput = this.removeHash()
    const queryStart = removeHashInput.indexOf('?')
    if (queryStart !== -1) {
      return removeHashInput.slice(queryStart + 1)
    }
    return ''
  }


  private getPathname() {
    const url = this.removeHash().split('?')[0] || ''
    let match
    if (url.indexOf('://') !== -1) {
      match = url.split('://')[1].match(/\/(.*)/)
    } else {
      match = url.match(/\/(.*)/)
    }
    return match ? match[0] : '/'
  }

  /**
   * 
   * @param text 
   * @param separator 
   * (age=99) => ['name', 29]
   * ('a-b-c', '-') => ['a', 'b-c']
   * ('key=value=value2', '=') => ['key', 'value=value2']
   */
  private splitOnFirst(text: string, separator: string) {
    const separatorStart = text.indexOf(separator)
    if (separatorStart !== -1) {
      return [text.slice(0, separatorStart), text.slice(separatorStart + 1)]
    }
    return [text, '']
  }

  private parse(input: string) {
    let result = Object.create(null)
    input = input.trim()

    for (let param of input.split('&')) {
      // ['name', 'xyh'] =   [name=xyh]
      // ['name', 'xyh=wyp'] =   [name=xyh=wyp]
      let [key, value] = this.splitOnFirst(param, '=')
      result[key] = value
    }
    return result
  }

}
