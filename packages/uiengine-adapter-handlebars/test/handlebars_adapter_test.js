const assert = require('assert')
const { resolve } = require('path')
const Adapter = require('../src/index')

describe('Handlebars adapter', () => {
  describe('#render', () => {
    it('should render the template with the given data', async () => {
      const templatePath = resolve(__dirname, 'fixtures', 'template.hbs')
      const options = {}
      const data = { myData: 1 }
      const rendered = await Adapter.render(options, templatePath, data)

      assert.equal(rendered, '<p>1</p>\n')
    })
  })
})
