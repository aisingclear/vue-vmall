<template>
  <div id="app">
    <div class="op" id="tt">
      <div class="yy"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
$r:41.4;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .op{
    width:414rem/$r;
    height: 736rem/$r;
    background: red;
    .yy{
      width: 240rem/$r;
      height: 80px;
      background: pink;
    }
  }
</style>
