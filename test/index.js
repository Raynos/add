var test = require("tape")

var add = require("../index.js")

test("add is a function", function (assert) {
    assert.equal(typeof add, "function")
    assert.end()
})

test("can add numbers", function (assert) {
  	assert.equal(add(3, 9), 12)
    assert.end()
})