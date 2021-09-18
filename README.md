# ⏳ vue-timeago3 ![Vue version](https://img.shields.io/badge/vue-3.2.6-brightgreen.svg) ![date-fns version](https://img.shields.io/npm/dependency-version/vue-timeago3/date-fns) [![NPM version](https://img.shields.io/npm/v/vue-timeago3.svg)](https://npmjs.com/package/vue-timeago3) [![NPM downloads](https://img.shields.io/npm/dm/vue-timeago3.svg)](https://npmjs.com/package/vue-timeago3) ![size](https://img.shields.io/bundlephobia/min/vue-timeago3)

A time ago component for Vue.js 3 based on [vue-timeago for Vue 2 by egoist](https://github.com/egoist/vue-timeago).

## Table of Contents
- [About](#sectionAbout)
- [Usage](#sectionUsage)
  - [Installation](#sectionInstall)
  - [Register Plugin](#sectionRegister)
  - [Component](#sectionComponent)

## About
<a name="sectionAbout"/>

**vue-timeago3** is a tiny component for Vue.js 3, to show the time passed since a specific date. You simply pass a date and get somewhat like `10 seconds ago`, `3 weeks ago`, `...` printed by the component

## Usage
<a name="sectionUsage"/>

### Installation
<a name="sectionInstall"/>
Currently the plugin is available via NPM and Yarn. To install it use one of the two package managers.

```javascript
// NPM
$ npm install vue-timeago3

// Yarn
$ yarn add vue-timeago3
```

### Register Plugin
To register the plugin simply import and register it using the new global vue3 api. As an alternative the plugin could be imported in specific components only.

<a name="sectionRegister"/>

```javascript
// src/main.js
import { createApp } from 'vue'
import timeago from 'vue-timeago3'

const app = createApp(App)
...
app.use(timeago) // register timeago
...
app.mount('#app')
```

#### Plugin Options
During the registration of the component you can specify a set of options, which will mutate the plugin **globally**. If you don't want to define global settings, skip this section and use props instead. To use options, simply pass them during the registration as an object:

```javascript
// src/main.js
import { createApp } from 'vue'
import timeago from 'vue-timeago3'

const app = createApp(App)
...
// define options
const timeagoOptions = {
  converterOptions: {
      includeSeconds: false,
  }
}  
  
app.use(timeago,  timeagoOptions) // register timeago with options
...
app.mount('#app')
```
As of version 1.0.0 the following options are available: 

| option               | type                                         | description                                                                                                                                                                                                                                                                                                            |
|----------------------|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **name**             | `string`                                     | Register the component with a custom name. Default is: `timeago`                                                                                                                                                                                                                                                       |
| **converter**        | `(date, locale, converterOptions) => string` | A **converter** that formats regular dates in `x Seconds ago`, or in `xxx` style. Check out the [default converter](ahttps://github.com/MrDeerly/vue-timeago3/blob/master/src/converter.js) which uses [date-fns formatDistanceToNow](https://date-fns.org/v2.24.0/docs/formatDistanceToNow)                           |
| **converterOptions** | `Object`                                     | Pass some extra settings to the default converter mentioned above. It supports the main options of `date-fns`, namingly:   <br/><br/>  `includeSeconds` - `boolean` - distances less than a minute are more detailed </br> `addSuffix` - `boolean` - results specifies if now is earlier or later than the date passed |

### Component
<a name="sectionComponent"/>

Once the plugin is registered you can straight up use it in your app.

**Basic usage**: 
```jsx
<template>
  <timeago :datetime="date"/>
</template>

<script>
...
data() {
  return {
    date: '2021-09-01'
  }
}
...
</script
```
#### Props
Instead of configurating the plugin during the registration, you can also configuate the component via `props`.
| property             | type                                        | required           | default | description                                                                                                                                                                                                                                   |
|----------------------|---------------------------------------------|--------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **datetime**         | `string \| Date \| number`                  | :heavy_check_mark: |         | The `datetime` used to calculate the "time ago"                                                                                                                                                                                               |
| **autoUpdate**       | `number \| boolean`                         |         :x:        | `false` | The period of time to update the component, **in seconds**. <br/> This can be omitted by setting it to `0` or `false`. <br/> <br/>  The default value for `true` is `60`(seconds). Instead of passing `true` you can also pass a custom time. |
| **converter**        | `date, locale, converterOptions) => string` |         :x:        |         | See plugin options above                                                                                                                                                                                                                      |
| **converterOptions** | `Object`                                    |         :x:        |         | See plugin options above                                                                                                                                                                                                                      |
