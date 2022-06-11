<script setup lang="ts">
import { ru } from "date-fns/locale";

const now = new Date();

const oneHourAgo = () => {
  return new Date().setHours(now.getHours() - 1);
};
const oneDayAgo = () => {
  return new Date().setDate(now.getDate() - 1);
};

const oneWeekAgo = () => {
  return new Date().setDate(now.getDate() - 7);
};

const oneMonthAgo = () => {
  return new Date().setDate(now.getDate() - 30);
};

const oneYearAgo = () => {
  return new Date().setDate(now.getDate() - 365);
};

const almostOneYearAgo = () => {
  return new Date().setDate(now.getDate() - 345);
};

</script>

<template>
  <table style="border: 1px solid #000; padding: 4px; width: 100%">
    <thead>
    <tr><th>Distance</th><th>Normal</th><th>Strict</th><th>Strict + unit</th></tr>
    </thead>
    <tbody>
    <tr>
      <td>Now was (English)</td>
      <td><timeago :datetime="now" :locale="en" :converter-options="{ includeSeconds: true }" :auto-update="1"/></td>
      <td><timeago :datetime="now" :locale="en" :converter-options="{ includeSeconds: true, useStrict: true }" :auto-update="1"/></td>
      <td><timeago :datetime="now" :locale="en" :converter-options="{ includeSeconds: true, useStrict: true, unit: 'second' }" :auto-update="1"/></td>
    </tr>
    <tr>
      <td>Now was (Russian)</td>
      <td><timeago :datetime="now" :locale="ru" :converter-options="{ includeSeconds: true }" :auto-update="1"/></td>
      <td><timeago :datetime="now" :locale="ru" :converter-options="{ includeSeconds: true, useStrict: true }" :auto-update="1"/></td>
      <td><timeago :datetime="now" :locale="ru" :converter-options="{ includeSeconds: true, useStrict: true, unit: 'second' }" :auto-update="1"/></td>
    </tr>
    <tr>
      <td>One hour was</td>
      <td><timeago :datetime="oneHourAgo()" :auto-update="1"/></td>
      <td><timeago :datetime="oneHourAgo()" :converter-options="{ useStrict: true }" :auto-update="1"/></td>
      <td><timeago :datetime="oneHourAgo()" :converter-options="{ useStrict: true, unit: 'minute' }" :auto-update="1"/></td>
    </tr>
    <tr>
      <td>Yesterday was</td>
      <td><timeago :datetime="oneDayAgo()" :auto-update="1"/></td>
      <td><timeago :datetime="oneDayAgo()" :converter-options="{ useStrict: true }" :auto-update="1"/></td>
      <td><timeago :datetime="oneDayAgo()" :converter-options="{ useStrict: true, unit: 'day' }" :auto-update="1"/></td>
    </tr>
    <tr>
      <td>One week was</td>
      <td><timeago :datetime="oneWeekAgo()" :auto-update="1"/></td>
      <td><timeago :datetime="oneWeekAgo()" :converter-options="{ useStrict: true }" :auto-update="1"/></td>
      <td><timeago :datetime="oneWeekAgo()" :converter-options="{ useStrict: true, unit: 'day' }" :auto-update="1"/></td>
    </tr>
    <tr>
      <td>One month was</td>
      <td><timeago :datetime="oneMonthAgo()" :auto-update="1"/></td>
      <td><timeago :datetime="oneMonthAgo()" :converter-options="{ useStrict: true }" :auto-update="1"/></td>
      <td><timeago :datetime="oneMonthAgo()" :converter-options="{ useStrict: true, unit: 'day' }" :auto-update="1"/></td>
    </tr>
    <tr>
      <td>Almost One year was</td>
      <td><timeago :datetime="almostOneYearAgo()" :auto-update="1"/></td>
      <td><timeago :datetime="almostOneYearAgo()" :converter-options="{ useStrict: true }" :auto-update="1"/></td>
      <td><timeago :datetime="almostOneYearAgo()" :converter-options="{ useStrict: true, unit: 'month' }" :auto-update="1"/></td>
    </tr>
    <tr>
      <td>One year was</td>
      <td><timeago :datetime="oneYearAgo()" :auto-update="1"/></td>
      <td><timeago :datetime="oneYearAgo()" :converter-options="{ useStrict: true }" :auto-update="1"/></td>
      <td><timeago :datetime="oneYearAgo()" :converter-options="{ useStrict: true, unit: 'month' }" :auto-update="1"/></td>
    </tr>

    </tbody>
  </table>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table {
  border-collapse: collapse;
}

tr {
  border-bottom: 1pt solid black;
}

tbody > tr:nth-child(odd) {
  background-color: #f3f3f3;
}

span {
  display: flex;
  gap: 4px;
}
</style>
