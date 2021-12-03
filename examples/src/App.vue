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
</script>

<template>
  <span>
    <b>Now was:</b>
    <timeago
      :datetime="now"
      :locale="ru"
      :converter-options="{ includeSeconds: true }"
      :auto-update="1"
    />
  </span>
  <span>
    <b>One hour was: </b>
    <timeago :datetime="oneHourAgo()" />
  </span>
  <span>
    <b>Yesterday was:</b>
    <timeago :datetime="oneDayAgo()" />
  </span>
  <span>
    <b>One week was: </b>
    <timeago :datetime="oneWeekAgo()" />
  </span>
  <span>
    <b>One month was: </b>
    <timeago :datetime="oneMonthAgo()" />
  </span>
  <span>
    <b>One year was: </b>
    <timeago :datetime="oneYearAgo()" />
  </span>
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

span {
  display: flex;
  gap: 4px;
}
</style>
