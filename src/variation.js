const path = require('path')
const R = require('ramda')
const glob = require('globby')
const markdown = require('./util/markdown')
const frontmatter = require('./util/frontmatter')
const VariationUtil = require('./util/variation')
const File = require('./util/file')
const Connector = require('./connector')

const assocVariation = (variations, variation) =>
  R.assoc(variation.id, variation, variations)

async function readVariationFile (filePath) {
  const variationName = path.basename(filePath, path.extname(filePath))
  const variationFile = path.join(path.dirname(filePath), `${variationName}.md`)
  const variation = await frontmatter.fromFile(variationFile)

  if (variation) {
    const { attributes, body } = variation
    const content = await markdown.fromString(body)

    return { attributes, content }
  } else {
    // no variation file
    return { attributes: {} }
  }
}

async function findVariationIds (state, componentPath = '**') {
  const { components } = state.config.source
  if (!components) return []

  const variationsPath = VariationUtil.componentIdToVariationsPath(components, componentPath)
  const pattern = path.join(variationsPath, '*')
  const excludePattern = '!' + path.join(variationsPath, '*.md')
  const variationPaths = await glob([pattern, excludePattern])

  const variationFilePathToVariationId = R.partial(VariationUtil.variationFilePathToVariationId, [components])
  const variationIds = R.map(variationFilePathToVariationId, variationPaths)

  return variationIds
}

async function fetchAll (state) {
  const componentsPath = state.config.source.components
  if (!componentsPath) return {}

  const variationIds = await findVariationIds(state)

  const variationFetch = R.partial(fetchById, [state])
  const variationFetches = R.map(variationFetch, variationIds)
  const variationList = await Promise.all(variationFetches)

  const variations = R.reduce(assocVariation, {}, variationList)

  return variations
}

async function fetchById (state, id) {
  const componentsPath = state.config.source.components
  const componentId = VariationUtil.variationIdToComponentId(id)
  const path = VariationUtil.variationIdToVariationFilePath(componentsPath, id)
  let { attributes, content } = await readVariationFile(path)

  const title = VariationUtil.variationIdToTitle(id)
  const context = attributes.context
  attributes = R.dissoc('context', attributes)
  attributes = R.merge({ title }, attributes)

  // render raw variation, without layout
  const rawTemplate = File.read(path)
  const renderTemplate = Connector.render(state, path, context)
  const [raw, rendered] = await Promise.all([rawTemplate, renderTemplate])

  const baseData = { id, componentId, path, content, raw, rendered, context }
  const data = R.mergeAll([attributes, baseData])

  return data
}

module.exports = {
  findVariationIds,
  fetchAll,
  fetchById
}
