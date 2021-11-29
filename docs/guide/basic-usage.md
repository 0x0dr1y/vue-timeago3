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
This will print something like ``now`` or ``5 seconds ago``.

By configuring the component, you can adjust a few more things like, auto updating for example. Please have a look at the next page.
