<template>
    <div id="app">
        <web-map v-on:click="onMapClick()"/>
    </div>
</template>

<script>
import WebMap from './components/WebMap.vue';

export default {
    name: 'App',
    components: { WebMap }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>