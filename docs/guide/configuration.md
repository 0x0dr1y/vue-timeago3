# Configuration

::: tip
The component can either be configured globally, or on component level.
To avoid conflicts and enhance the adaptability it's suggested to configure `vue-timeago3` on component level.
:::

## Component options (local)

As usual the component is configured using properties.

### Example

```vue{2-10,15,19}
<template>
  <timeago
    :datetime="date"
    :locale="es"
    :converter-options="{
      includeSeconds: true,
      addSuffix: false,
      useStrict: false,
    }"
    auto-update
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

### Properties

The following props are available and can be used:

#### datetime

> The `datetime` is used to compute the "timeago" as a word. It reflects a timestamp and can be either a `string`, `number` or a `Date`. Since it's a required property, the component won't work without it.

- **type:** `string | number | Date`
- **required:** :heavy_check_mark:

---

#### autoUpdate

> `autoUpdate` specifies the period of time to update the component, **in seconds**. This can be omitted by setting it to `0` or `false`. Instead of passing `true` to activate it, you can also pass a custom interval by passing a `number`.

- **type:** `number | boolean`
- **required:** :x:
- **default:** `false`

---

#### locale

> The `locale` specifies the language which is used to render the date. All available `date-fns` locales are supported by default.

- **type:** `Locale` (see [date-fns/Locale](https://date-fns.org/v2.26.0/docs/Locale))
- **required:** :x:
- **default:** `en`

---

#### converter

> A **converter** that formats regular dates in `x Seconds ago`, or in `xxx` style. Check out the [default converter](https://github.com/MrDeerly/vue-timeago3/blob/master/src/converter/defaultConverter.ts) which uses [date-fns formatDistanceToNow](https://date-fns.org/v2.24.0/docs/formatDistanceToNow)

- **type:** `(date, defaultConverterOptions | strictConverterOptions) => string`
- **required:** :x:
- **default:** `null`

---

#### defaultConverterOptions

> The defaultConverterOptions allow you to adjust the default converter' configuration. The default supports the main options of `date-fns`, naming:
>
> - `includeSeconds` - `boolean | undefined` - distances less than a minute are more detailed
> - `addSuffix` - `boolean | undefined` - results specifies if now is earlier or later than the date passed
> - `useStrict` - `false | undefined` - **if `true` you need to use the `strictConverterOptions` (see below)**

- **type:** `Record<string, boolean>`
- **required:** :x:
- **default:** `{}`

---

#### strictConverterOptions

> The strictConverterOptions allow you to use the defaultConverter in strict mode. The strict conversion supports the main options of `date-fns`, naming:
>
> - `useStrict` - `true` - enables strict converting
> - `addSuffix` - `boolean | undefined` - results specifies if now is earlier or later than the date passed
> - `unit` - `"second" | "minute" | "hour" | "day" | "month" | "year" | undefined` - defines which unit is used for the conversion
> - `roundingMethod` - `"floor" | "ceil" | "round" | undefined` - defines which method is used to round the time
- **type:** `Record<string, boolean>`
- **required:** :x:
- **default:** `{}`

## Plugin options (global)

Instead of configuring vue-timeago3 on component level, it can also be configured on a global level while registering the component.

### Example

```js{4,9-13,15}
// src/main.ts
import App from './App'
import { createApp } from 'vue'
import timeago from 'vue-timeago3' // import timeago
import { es } from 'date-fns/locale' // import custom locale


const app = createApp(App);
...
// define options
const timeagoOptions = {
  converterOptions: {
      includeSeconds: false,
  },
  locale: es,
}

app.use(timeago,  timeagoOptions) // register timeago with options
...
app.mount('#app')
```

### Options

:::warning
If both global and component options are used, the component options will be higher prioritized and used.
:::

#### name

> The `name` option allows you to customize the components name. Please keep in mind that with changing this value, you need to use the component with the specified name.

- **type:** `string`
- **required:** :x:
- **default:** `Timeago`

---

#### locale

> The `locale` specifies the language which is used to render the date. All available `date-fns` locales are supported by default.

- **type:** `Locale` (see [date-fns/Locale](https://date-fns.org/v2.26.0/docs/Locale))
- **required:** :x:
- **default:** `en`

---

#### converter

> A **converter** that formats regular dates in `x Seconds ago`, or in `xxx` style. Check out the [default converter](https://github.com/MrDeerly/vue-timeago3/blob/master/src/converter/defaultConverter.ts) which uses [date-fns formatDistanceToNow](https://date-fns.org/v2.24.0/docs/formatDistanceToNow)

- **type:** `(date, defaultConverterOptions | strictConverterOptions) => string`
- **required:** :x:
- **default:** `null`

---

#### defaultConverterOptions

> The defaultConverterOptions allow you to adjust the default converter' configuration. The default supports the main options of `date-fns`, naming:
>
> - `includeSeconds` - `boolean | undefined` - distances less than a minute are more detailed
> - `addSuffix` - `boolean | undefined` - results specifies if now is earlier or later than the date passed
> - `useStrict` - `false | undefined` - **if `true` you need to use the `strictConverterOptions` (see below)**

- **type:** `Record<string, boolean>`
- **required:** :x:
- **default:** `{}`

---

#### strictConverterOptions

> The strictConverterOptions allow you to use the defaultConverter in strict mode. The strict conversion supports the main options of `date-fns`, naming:
>
> - `useStrict` - `true` - enables strict converting
> - `addSuffix` - `boolean | undefined` - results specifies if now is earlier or later than the date passed
> - `unit` - `"second" | "minute" | "hour" | "day" | "month" | "year" | undefined` - defines which unit is used for the conversion
> - `roundingMethod` - `"floor" | "ceil" | "round" | undefined` - defines which method is used to round the time
- **type:** `Record<string, boolean>`
- **required:** :x:
- **default:** `{}`
