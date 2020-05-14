# Vue Browser Detect Plugin

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Simple plugin for Vue that detects browser name, version, and user-agent.

## Installation

```bash
npm install vue-browser-detect-plugin
```

In your `main.js:`

```bash
import browserDetect from "vue-browser-detect-plugin";
Vue.use(browserDetect);
```

## Usage

### Browser info:

- **vm.\$browserDetect.isIE** `boolean`

- **vm.\$browserDetect.isChrome** `boolean`

- **vm.\$browserDetect.isFirefox** `boolean`

- **vm.\$browserDetect.isOpera** `boolean`

- **vm.\$browserDetect.isSafari** `boolean`

- **vm.\$browserDetect.isEdge** `boolean`

- **vm.\$browserDetect.isChromeIOS** `boolean`

- **vm.\$browserDetect.isIOS** `boolean`

### Additional meta info:

- **vm.\$browserDetect.meta.name** `Chrome, IE, Edge, etc.`

- **vm.\$browserDetect.meta.version** `Version`

- **vm.\$browserDetect.meta.ua** `user-agent`

## Demo

https://vue-browser-detect.netlify.com/

## Nuxt.js

Add `vue-browser-detect-plugin/nuxt` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    'vue-browser-detect-plugin/nuxt'
  ]
}
```

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

## CHANGLOG

[See CHANGELOG.md](https://github.com/ICJIA/vue-browser-detect-plugin/blob/master/CHANGELOG.md)
