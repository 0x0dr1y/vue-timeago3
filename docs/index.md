---
home: true
heroText: ⏳ vue-timeago3
tagline: A super tiny timeago component for Vue.js 3
actionText: Get Started
actionLink: /guide/getting-started
features:
- title: TypeScript support
  details: The library was completely written in TypeScript, which brings a great support for Vue3' Composition API.
- title: Performant
  details: Thanks to Vue.js 3.0 the component is both super tiny and fast. So fast, that you won't even notice it.
- title: date-fns v2.26 
  details: Thanks to date-fns you have the full control over everything, including the language and converter options.
footer: MIT Licensed | Copyright © 2021-present MrDeerly
---

---
<div align="center">

## Example Usage 

```
Now was: less than 5 seconds ago
```

```vue{3,12}
<template>
  <span>
    Now was: <timeago :datetime="date"/>
  </span>  
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
</div>


