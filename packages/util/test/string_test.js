const assert = require('assert')

const StringUtil = require('../src/string')

describe('StringUtil', () => {
  describe('#upcaseFirstChar', () => {
    it('should convert the first character of the string to uppercase', () => {
      assert.equal(StringUtil.upcaseFirstChar('test'), 'Test')
    })

    it('should not convert other characters to uppercase', () => {
      assert.equal(StringUtil.upcaseFirstChar('test test test'), 'Test test test')
    })
  })

  describe('#dasherize', () => {
    it('should convert non-word character to dashes', () => {
      assert.equal(StringUtil.dasherize('this is a test. does/it.work?'), 'this-is-a-test-does-it-work-')
    })
  })

  describe('#titleize', () => {
    it('should return titleized string', () => {
      assert.equal(StringUtil.titleize('form'), 'Form')
      assert.equal(StringUtil.titleize('formfield-with-label'), 'Formfield With Label')
      assert.equal(StringUtil.titleize('This    is some .   text'), 'This Is Some Text')
    })
  })

  describe('#titleFromContentHeading', () => {
    it('should resolve title from content heading', () => {
      assert.equal('Atoms 1', StringUtil.titleFromContentHeading('<h1 id="atoms-1">Atoms 1</h1>'))
    })

    it('should return null if content has no heading', () => {
      assert.equal(null, StringUtil.titleFromContentHeading(''))
    })
  })

  describe('#hasContent', () => {
    it('should return true if it has a title', () => {
      assert.equal(true, StringUtil.hasContent('<h1 id="atoms">Atoms</h1>\n<p>This is content.</p>'))
    })

    it('should return false if it has only a title', () => {
      assert.equal(false, StringUtil.hasContent('<h1 id="atoms">Atoms</h1>'))
    })

    it('should return false if content is not set', () => {
      assert.equal(false, StringUtil.hasContent(null))
    })
  })
})
