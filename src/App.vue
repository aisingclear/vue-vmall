<template>
  <div id="app">
    <router-view></router-view>
    <router-ui></router-ui>

  </div>
</template>

<script>
import routerUi from './components/routerui/routerui.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    routerUi
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
