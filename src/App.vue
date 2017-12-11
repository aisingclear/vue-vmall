<template>
  <div id="app">
    <div class="foo">
      <footer>
        <ul>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
        </ul>
      </footer>
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
  .foo{
    width: 414rem/$r;
    height: 55.188rem/$r;
    border-top: 1px solid #eee;
    position: fixed;
    bottom: 0px;
    footer{
      width: 100%;
      height: 100%;
      ul{
        width: 100%;
        height: 100%;
        display:flex;
        li{
          float: left;
          flex: 1;
        }
      }
    }
  }
}

</style>
