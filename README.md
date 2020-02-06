# Vue Browser Detect Plugin

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
