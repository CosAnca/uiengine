/* global describe, it */
const path = require('path')
const assert = require('assert')

const PageUtil = require('../src/util/page')

const pagesPath = path.resolve(__dirname, 'project', 'src', 'pages')

describe('PageUtil', () => {
  describe('#pageIdToPath', () => {
    it('should return empty path for index page', () => {
      assert.equal(PageUtil.pageIdToPath('index'), '')
    })

    it('should return path for page', () => {
      assert.equal(PageUtil.pageIdToPath('patterns/atoms/buttons'), 'patterns/atoms/buttons')
    })
  })

  describe('#pageIdToTitle', () => {
    it('should return titleized name', () => {
      assert.equal(PageUtil.pageIdToTitle('index'), 'Home')
      assert.equal(PageUtil.pageIdToTitle('patterns/atoms'), 'Atoms')
      assert.equal(PageUtil.pageIdToTitle('pattern-library'), 'Pattern Library')
    })
  })

  describe('#pageIdToPageFilePath', () => {
    it('should return page file path for index page', () => {
      assert.equal(
        PageUtil.pageIdToPageFilePath(pagesPath, 'index'),
        path.join(pagesPath, 'page.md')
      )
    })

    it('should return page file path for page', () => {
      assert.equal(
        PageUtil.pageIdToPageFilePath(pagesPath, 'patterns/atoms/buttons'),
        path.join(pagesPath, 'patterns', 'atoms', 'buttons', 'page.md')
      )
    })
  })

  describe('#pageFilePathToPageId', () => {
    it('should return page id for index file path', () => {
      assert.equal(PageUtil.pageFilePathToPageId(pagesPath, path.join(pagesPath, 'page.md')), 'index')
    })

    it('should return page id for page file path', () => {
      assert.equal(PageUtil.pageFilePathToPageId(pagesPath, path.join(pagesPath, 'patterns', 'atoms', 'buttons', 'page.md')), 'patterns/atoms/buttons')
    })

    it('should return page id for file path', () => {
      assert.equal(PageUtil.pageFilePathToPageId(pagesPath, path.join(pagesPath, 'patterns', 'atoms', 'buttons', 'additional.pdf')), 'patterns/atoms/buttons')
    })

    it('should return null for invalid file path', () => {
      const filePath = path.resolve(__dirname, 'project', 'src', 'components', 'component.md')
      assert.equal(PageUtil.pageFilePathToPageId(pagesPath, filePath), null)
    })
  })

  describe('#parentIdForPageId', () => {
    it('should return null for index file path', () => {
      assert.equal(PageUtil.parentIdForPageId('index'), null)
    })

    it('should return parent page id for page file path', () => {
      assert.equal(PageUtil.parentIdForPageId('patterns/atoms/buttons'), 'patterns/atoms')
    })
  })

  describe('#parentIdsForPageId', () => {
    it('should return empty array for index file path', () => {
      const parentIds = PageUtil.parentIdsForPageId('index')
      assert.equal(parentIds.length, 0)
    })

    it('should return array with parent page ids for page file path', () => {
      const parentIds = PageUtil.parentIdsForPageId('patterns/atoms/buttons')
      assert.equal(parentIds.length, 3)
      assert.equal(parentIds[0], 'index')
      assert.equal(parentIds[1], 'patterns')
      assert.equal(parentIds[2], 'patterns/atoms')
    })
  })

  describe('#pageIdForComponentId', () => {
    it('should convert the component id into a page id based on the parent page id for index page', () => {
      const pageId = PageUtil.pageIdForComponentId('index', 'button')
      assert.equal(pageId, 'button')
    })

    it('should convert the component id into a page id based on the parent page id for child page', () => {
      const pageId = PageUtil.pageIdForComponentId('patterns/atoms', 'button')
      assert.equal(pageId, 'patterns/atoms/button')
    })
  })

  describe('#pagePathForComponentId', () => {
    it('should convert the component id into a page path based on the parent page path for index page', () => {
      const pagePath = PageUtil.pagePathForComponentId('', 'button')
      assert.equal(pagePath, 'button')
    })

    it('should convert the component id into a page path based on the parent page path for child page', () => {
      const pagePath = PageUtil.pagePathForComponentId('pattern-library/atoms', 'button')
      assert.equal(pagePath, 'pattern-library/atoms/button')
    })
  })

  describe('#convertUserProvidedChildrenList', () => {
    it('should convert the children list provided by the user to childIds for index page', () => {
      const attrs = { children: ['patterns', 'docs'] }
      const { childIds } = PageUtil.convertUserProvidedChildrenList('index', attrs)
      assert.equal(childIds[0], 'patterns')
      assert.equal(childIds[1], 'docs')
    })

    it('should convert the children list provided by the user to childIds for child page', () => {
      const attrs = { children: ['atoms', 'molecules'] }
      const { childIds } = PageUtil.convertUserProvidedChildrenList('patterns', attrs)
      assert.equal(childIds[0], 'patterns/atoms')
      assert.equal(childIds[1], 'patterns/molecules')
    })
  })

  describe('#convertUserProvidedComponentsList', () => {
    it('should convert the components list provided by the user to componentIds for index page', () => {
      const attrs = { components: ['link'] }
      const { componentIds } = PageUtil.convertUserProvidedComponentsList('index', attrs)
      assert.equal(componentIds[0], 'link')
    })

    it('should convert the components list provided by the user to componentIds for child page', () => {
      const attrs = { components: ['link', 'button'] }
      const { componentIds } = PageUtil.convertUserProvidedComponentsList('patterns/atoms', attrs)
      assert.equal(componentIds[0], 'link')
      assert.equal(componentIds[1], 'button')
    })
  })
})