let assert = require('assert')
let { add } = require('../src/add')

describe('Add', () => {
    it('add(3, 4) should equal 7', () => {
        assert.equal(add(3, 4), 7)
    })
})