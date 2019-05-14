<template>
  <div class="hello">
    <img src="../../static/image/logo.png">
    <div> {{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.hello{
  width: 100%;
  height: 100%;
  img{
    width: 20%;
  }
}
</style>
