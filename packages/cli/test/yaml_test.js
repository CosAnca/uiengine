const assert = require('assert')
const { join, resolve } = require('path')

const YamlUtil = require('../src/yaml')

const sourcePaths = {
  base: __dirname,
  data: join(__dirname, 'fixtures')
}

const yaml = join(__dirname, 'fixtures/yaml.yml')
const yamlWithExtends = join(__dirname, 'fixtures/yaml-with-extends.yml')
const yamlWithIncludes = join(__dirname, 'fixtures/yaml-with-includes.yml')

const string = `
name: Index
included_md: !include /fixtures/markdown.md
data: !data /json.json
content: !markdown |\n  # Headline\n  Text paragraph
include_with_incompatible_type: !include /fixtures/layout.psd
`

describe('YamlUtil', () => {
  describe('#fromFile', () => {
    it('should return parsed yaml', async () => {
      const data = await YamlUtil.fromFile(yaml, sourcePaths)

      assert.strictEqual(data.name, 'Index')
      assert.strictEqual(data.number, 2)
    })

    it('should include yaml files referenced by relative !include', async () => {
      const data = await YamlUtil.fromFile(yamlWithIncludes, sourcePaths)

      assert.strictEqual(data.relative1_include_yaml.name, 'Index')
      assert.strictEqual(data.relative1_include_yaml.number, 2)
      assert.strictEqual(data.relative2_include_yaml.name, 'Index')
      assert.strictEqual(data.relative2_include_yaml.number, 2)
      assert.strictEqual(data.relative3_include_yaml.name, 'Index')
      assert.strictEqual(data.relative3_include_yaml.number, 2)
    })

    it('should include yaml files referenced by absolute !include', async () => {
      const data = await YamlUtil.fromFile(yamlWithIncludes, sourcePaths)

      assert.strictEqual(data.absolute_include_yaml.name, 'Index')
      assert.strictEqual(data.absolute_include_yaml.number, 2)
      assert.strictEqual(data.nested_include.absolute_include.number, 2)
      assert.strictEqual(data.nested_include.relative_include.number, 2)
    })

    it('should include yaml files referenced by !data', async () => {
      const data = await YamlUtil.fromFile(yamlWithIncludes, sourcePaths)

      assert.strictEqual(data.data_yaml.name, 'Index')
      assert.strictEqual(data.data_yaml.number, 2)
      assert.strictEqual(data.data_nested.absolute_data.number, 2)
      assert.strictEqual(data.data_nested.relative_data.number, 2)
    })

    it('should include json files referenced by !data', async () => {
      const data = await YamlUtil.fromFile(yamlWithIncludes, sourcePaths)

      assert.strictEqual(data.data_json.name, 'JSON')
      assert.strictEqual(data.data_json.number, 3)
    })

    it('should include js files referenced by !data', async () => {
      const data = await YamlUtil.fromFile(yamlWithIncludes, sourcePaths)

      assert.strictEqual(data.data_js.name, 'Included JS')
      assert.strictEqual(data.data_js.number, 4)
    })

    it('should include markdown files referenced by !data', async () => {
      const data = await YamlUtil.fromFile(yamlWithIncludes, sourcePaths)

      assert.strictEqual(data.data_md, '<h1 id="homepage">Homepage</h1>\n<p>Welcome!</p>')
    })

    it('should extend data structures by deep merging them', async () => {
      const data = await YamlUtil.fromFile(yamlWithExtends, sourcePaths)

      assert.strictEqual(data.name, 'Index')
      assert.strictEqual(data.number, 3)
      assert.strictEqual(data.nested.name, 'Index')
      assert.strictEqual(data.nested.number, 4)
      assert.strictEqual(data.nested.deep.extended, true)
      assert.strictEqual(data.nested.deep.overwritten, true)
    })
  })

  describe('#fromString', () => {
    it('should return parsed yaml', async () => {
      const data = await YamlUtil.fromString('name: Index\nnumber: 2', sourcePaths)

      assert.strictEqual(data.name, 'Index')
      assert.strictEqual(data.number, 2)
    })

    it('should parse with custom markdown type', async () => {
      const data = await YamlUtil.fromString(string, sourcePaths)

      assert.strictEqual(data.included_md, '<h1 id="homepage">Homepage</h1>\n<p>Welcome!</p>')
      assert.strictEqual(data.content, '<h1 id="headline">Headline</h1>\n<p>Text paragraph</p>')
      assert.strictEqual(data.data.name, 'JSON')
      assert.strictEqual(data.data.number, 3)
      assert.strictEqual(data.include_with_incompatible_type, resolve(__dirname, 'fixtures', 'layout.psd'))
    })

    it('should allow duplicate keys and override and extend previous values', async () => {
      const data = await YamlUtil.fromString('object:\n  value1: 1\n  value2: 2\nobject:\n  value1: 1\n  value2:\n    nested: 3\n  value3: 4', sourcePaths)

      assert.strictEqual(data.object.value1, 1)
      assert.strictEqual(data.object.value2.nested, 3)
      assert.strictEqual(data.object.value3, 4)
    })

    it('should throw error with invalid YAML', async () => {
      try {
        await YamlUtil.fromString(': invalid', sourcePaths)
      } catch (error) {
        assert(error)
      }
    })
  })
})
