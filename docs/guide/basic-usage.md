# Basic Usage

Once the plugin is registered you can straight up use it in your app.

```vue{2,10}
<template>
  <timeago :datetime="date"/>
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

This will print something like `now` or `5 seconds ago`.

By configuring the component, you can adjust a few more things like, auto updating for example. Please have a look at the next page.

## Custom language

By default, vue-timeago3 uses date-fns under the hood. This means that over 80 languages can be used. To do so, you can simply import any of the `date-fns` language packs, and pass it down to vue-timeago.

All available locales can be found [here](https://github.com/date-fns/date-fns/tree/master/src/locale)!

```vue{2-5,10,14}
<template>
  <timeago
    :datetime="date"
    :locale="es"
   />
</template>

<script>
export default {
  import { es } from 'date-fns/locale' // import custom locale

  data() {
    return {
      date: new Date() // current Date
    }
  },
  ...
}
</script>
```
