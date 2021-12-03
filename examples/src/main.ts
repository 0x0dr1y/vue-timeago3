import { createApp } from "vue";
import App from "./App.vue";
// @ts-ignore
import timeago from "vue-timeago3";

createApp(App)
  .use(timeago) // register timeago
  .mount("#app");
