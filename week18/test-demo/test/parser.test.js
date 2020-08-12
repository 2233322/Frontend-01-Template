let assert = require('assert')
let { parseHTML } = require('../src/parser')

describe('ParseHTML', () => {
    it('parse a single element', () => {
        let doc = parseHTML('<div></div>')
        let div = doc.children[0]
        assert.equal(div.type, 'element')
        assert.equal(div.tagName, 'div')
        assert.equal(div.children.length, 0)
        assert.equal(div.attributes.length, 0)
    })

    it('parse a single element with text content', () => {
        let doc = parseHTML('<div>hello</div>')
        let text = doc.children[0].children[0]
        assert.equal(text.type, 'text')
        assert.equal(text.content, 'hello')
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
        let doc = parseHTML(`<div id=root class="main" data='hello'></div>`)
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
})