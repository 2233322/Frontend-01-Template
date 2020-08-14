import assert  from 'assert'
import { parseHTML } from '../src/parser.js'

describe('ParseHTML', () => {
    it('parse a single element', () => {
        let doc = parseHTML('<div></div>')
        let div = doc.children[0]
        assert.equal(div.type, 'element')
        assert.equal(div.tagName, 'div')
        assert.equal(div.children.length, 0)
        assert.equal(div.attributes.length, 0)
    })

    it('parse a single element', () => {
        let doc = parseHTML('<div  ></div>')
        let div = doc.children[0]
        assert.equal(div.type, 'element')
        assert.equal(div.tagName, 'div')
        assert.equal(div.children.length, 0)
        assert.equal(div.attributes.length, 0)
    })

    it('parse a single element', () => {
        let doc = parseHTML('<div12></div12>')
        let div = doc.children[0]
    })


    it('parse a single element with text content', () => {
        let doc = parseHTML('<div>hello</div>')
        let text = doc.children[0].children[0]
        assert.equal(text.type, 'text')
        assert.equal(text.content, 'hello')
    })



    it('Self closing start tag', () => {
        let doc = parseHTML(`<img src="logo" width='100%' class=cls/><img/>`)
        let img = doc.children[0]
        for(let attr of img.attributes) {
            if (attr.name === 'isSelfClosing') {
                assert.equal(attr.value, true)
                assert.ok(true)
            }
        }
    })


    it('Self closing start tag', () => {
        let doc = parseHTML(`<img class='cls'/><img/>`)
        let img = doc.children[0]
        for(let attr of img.attributes) {
            if (attr.name === 'isSelfClosing') {
                assert.equal(attr.value, true)
                assert.ok(true)
            }
        }
    })

    it('Self closing start tag', () => {
        let doc = parseHTML('<img /><img  src  /><img/>')
        let img = doc.children[0]
        for(let attr of img.attributes) {
            if (attr.name === 'isSelfClosing') {
                assert.equal(attr.value, true)
                assert.ok(true)
            }
        }
    })


    it('tag mismatch', () => {
        try {
            let doc = parseHTML('<div></vid>')
        } catch (error) {
            assert.equal(error.message, 'Tag start end doesn\'t match!')
        }
        
    })

    it('text with <', () => {
        let doc = parseHTML('<div>a < b </div>')
        let text = doc.children[0].children[0]
        assert.equal(text.type, 'text')
        assert.equal(text.content, 'a < b ')
    })

    it('with property', () => {
        let doc = parseHTML(`<div  id  =  root class="main" enable data='hello'></div>`)
        let div = doc.children[0]
        

        let count = 0
        for(let attr of div.attributes) {
            if (attr.name === 'id') {
                count++
                assert.equal(attr.value, 'root')
            }

            if (attr.name === 'class') {
                count++
                assert.equal(attr.value, 'main')
            }

            if (attr.name === 'data') {
                count++
                assert.equal(attr.value, 'hello')
            }

        }
        assert.equal(count, 3)
    })

    it('with property', () => {
        let doc = parseHTML(`<div enable></div><div enable ></div>`)
        let div = doc.children[0]
    })


    it('UnquotedAttributeValue', () => {
        let doc = parseHTML('<div id=root></div>')
        let div = doc.children[0]
        for (let attr of div.attributes) {
            if (attr.name === 'id') {
                assert.equal(attr.value, 'root')
                assert.ok(true)
            }
        }
    })

    it('missing end tag name parse error', () => {
        let doc = parseHTML('<div></></div>')
        let div = doc.children[0]
        assert.equal(div.type, 'element')
        assert.equal(div.tagName, 'div')
        assert.equal(div.children.length, 0)
        assert.equal(div.attributes.length, 0)
    })


    it(' invalid first character of tag name', () => {
        let doc = parseHTML('<div></2div></div>')
        let div = doc.children[0]
        assert.equal(div.type, 'element')
        assert.equal(div.tagName, 'div')
        assert.equal(div.children[0], '<!--2div-->')
        assert.equal(div.attributes.length, 0)
    })

    it('script parser', () => {
        let code = `<div>hello</div>
        let name = 2233322
        <
        <<
        </
        </s
        </<
        </sc
        </s<
        </scr
        </sc<
        </scri
        </scr<
        </scrip
        </scri<
        </script
        </scrip<
        </script<`
        let doc = parseHTML(`<script>${code}</script >`)
        let scriptText = doc.children[0].children[0]
        assert.equal(scriptText.content, code)

    })


})