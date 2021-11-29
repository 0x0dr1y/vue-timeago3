# Getting Started

This section will help you build a basic VitePress documentation site from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 3.

- **Step. 1:** Install ``vue-timeago3``

Currently, the package is available via NPM and Yarn. To install it use one of the two package managers.

**NPM** 
  ```bash
   npm install vue-timeago3
  ```

**Yarn**
  ```bash
   yarn add vue-timeago3
  ```

- **Step. 2:** Register Plugin
 
To register the plugin simply import and register it using the new global vue3 api. As an alternative the plugin could be imported in specific components only.
```js{4,8}
// src/main.ts
import App from './App'
import { createApp } from 'vue'
import timeago from 'vue-timeago3'

const app = createApp(App)
...
app.use(timeago) // register timeago
...
app.mount('#app') 
```

- **Step. 3:** Enjoy!

Congratulations, you've successfully installed ``vue-timeago3``. You can now start using the component, or configure it on a global level.

