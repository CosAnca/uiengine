# Handlebars

🚦 *State:* Proof of concept

[![npm](https://img.shields.io/npm/v/@uiengine/adapter-handlebars.svg)](https://www.npmjs.com/package/@uiengine/adapter-handlebars)

## Configuration

Plain and simple:

```js
{
  adapters: {
    hbs: '@uiengine/adapter-hbs'
  }
}
```

With options:

```js
{
  adapters: {
    hbs: {
      module: '@uiengine/adapter-handlebars',
      options: {
        namespace: 'myapp'
      }
    }
  }
}
```

Available options:

- `namespace` prefixes partials with the given namespace and a slash: `myapp/component`

In addition to that there is the option `debug` for a more detailed output in case of rendering errors.
