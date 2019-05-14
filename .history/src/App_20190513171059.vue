<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {

    }
  }

</script>

<style scoped lang="scss">
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    overflow-x: hidden;
  }

  #app {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
