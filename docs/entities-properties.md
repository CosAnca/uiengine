# Entities

The entity definitions can be used to document data structures and component properties.

## Definition

An entity definition describes a single property by its `type` and a short `description`.
In addition to that you can also mark the property as `required` and document a `default`.

```js
module.exports = {
  name: {
    type: 'String',
    description: 'Product name or title',
    required: true
  },
  amount: {
    type: 'Number',
    description: 'The amount of items',
    default: 1
  },
  purchased: {
    type: 'Date',
    description: 'The purchase date'
  },
  isShipped: {
    type: 'Boolean',
    description: 'Has the product been shipped, yet',
    default: 'false'
  }
}
```

### Component properties

You can document the component properties in the [component config file](/basics/component/#component-file).

List the components using the name as key and the definition for each property as value:

```js
module.exports = {
  properties: {
    '+episode(episode)': {
      episode: {
        type: 'Episode',
        required: true
      }
    },
    '+cta(title, url)': {
      title: {
        type: 'String',
        description: 'Button-Title',
        required: true
      },
      url: {
        type: 'String',
        description: 'URL the button leads to',
        required: true
      }
    }
  }
}
```

The name (i.e. `+episode(episode)`) is an arbitrary value and will be displayed as the title.
You can use it to describe the code that should be used to render the component – like the example above for a Pug component.

## Entity files

An entity can be stored in a file inside the [entities directory(/basics/config/#source).
Each file contains the definition for the type referenced via the filename – i.e. `Episode.yml` for the entity type `Episode`.
