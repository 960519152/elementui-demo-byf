<template>
  <div class="hello">
    {{msg}}
    <img src="../../static/image/logo.png">
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
  background:  green;
  position: absolute;
  img{
    width: 20%;
  }
}
</style>
