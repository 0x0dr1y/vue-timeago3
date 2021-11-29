# Configuration
::: tip
The component can either be configured globally, or on component level.
To avoid conflicts and enhance the adaptability it's suggested to configure ``vue-timeago3`` on component level.
:::

## Component options (local)

As usual the component is configured using properties. The following props are available and can be used:

### Example 
```vue{2-9,17}
<template>
  <timeago 
    :datetime="date"
     :converter-options="{
        includeSeconds: true,
        addSuffix: false,
     }"
     auto-update
   />
</template>

<script>
export default {
  ...
  data() {
    return {
      date: new Date() // current Date 
    }
  },
  ...
}
</script>
```
### Properties
| property             | type                                        | required           | default | description                                                                                                                                                                                                                                   |
|----------------------|---------------------------------------------|--------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **datetime**         | `string \| Date \| number`                  | :heavy_check_mark: |         | The `datetime` used to calculate the "time ago"                                                                                                                                                                                               |
| **autoUpdate**       | `number \| boolean`                         |         :x:        | `false` | The period of time to update the component, **in seconds**. <br/> This can be omitted by setting it to `0` or `false`. <br/> <br/>  The default value for `true` is `60`(seconds). Instead of passing `true` you can also pass a custom time. |
| **converter**        | `(date, locale, converterOptions) => string` |         :x:        |         | A **converter** that formats regular dates in `x Seconds ago`, or in `xxx` style. Check out the [default converter](https://github.com/MrDeerly/vue-timeago3/blob/master/src/converter/defaultConverter.ts) which uses [date-fns formatDistanceToNow](https://date-fns.org/v2.24.0/docs/formatDistanceToNow)                           |                                                                                                                                                                                                                     |
| **converterOptions** | `Object`                                    |         :x:        |         |                                     See below                                                                                                                                                                   |


#### converterOptions
The converterOptions allow you to adjust the default converter' configuration. The default supports the main options of ``date-fns``, naming:  
- `includeSeconds` - `boolean` - distances less than a minute are more detailed 
- `addSuffix` - `boolean` - results specifies if now is earlier or later than the date passed

## Plugin options (global)

Instead of configuring vue-timeago3 on component level, it can also be configured on a global level while registering the component:

### Example
```js{4,9-13,15}
// src/main.ts
import App from './App'
import { createApp } from 'vue'
import timeago from 'vue-timeago3'

const app = createApp(App);
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

### Options

| option               | type                                         | description                                                                                                                                                                                                                                                                                                            |
|----------------------|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **name**             | `string`                                     | Register the component with a custom name. Default is: `timeago`                                                                                                                                                                                                                                                       |
| **converter**        | `(date, locale, converterOptions) => string` | A **converter** that formats regular dates in `x Seconds ago`, or in `xxx` style. Check out the [default converter](https://github.com/MrDeerly/vue-timeago3/blob/master/src/converter/defaultConverter.ts) which uses [date-fns formatDistanceToNow](https://date-fns.org/v2.24.0/docs/formatDistanceToNow)                           |
| **converterOptions** | `Object`                                     | Pass some extra settings to the default converter mentioned above. It supports the main options of `date-fns`, namingly:  `includeSeconds` - `boolean` - distances less than a minute are more detailed  `addSuffix` - `boolean` - results specifies if now is earlier or later than the date passed |