import assert from 'assert'
import { add } from '../src/add.js'

describe('Add', () => {
    it('add(3, 4) should equal 7', () => {
        assert.equal(add(3, 4), 7)
    })
})