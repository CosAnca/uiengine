# Pug

🚦 *State:* Production ready

[![npm](https://img.shields.io/npm/v/@uiengine/adapter-pug.svg)](https://www.npmjs.com/package/@uiengine/adapter-pug)

## Configuration

Plain and simple:

```js
{
  adapters: {
    pug: '@uiengine/adapter-pug'
  }
}
```

With options:

```js
{
  adapters: {
    pug: {
      module: '@uiengine/adapter-pug',
      options: {
        pretty: true,
        basedir: './src/components'
      }
    }
  }
}
```

For available options see the [Pug options reference](https://pugjs.org/api/reference.html#options).

In addition to that there is the option `debug` for a more detailed output in case of rendering errors.
