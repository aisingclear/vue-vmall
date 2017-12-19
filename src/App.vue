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
  },
  beforeCreate(){
    console.log('实例刚刚被创建，属性都没有'+new Date().getTime());
  },
  created(){
    console.log('实例刚刚被创建，属性已经绑定'+new Date().getTime());
  },
  beforeMount(){
    console.log('模板编译之前'+new Date().getTime());
  },
  mounted(){
    console.log('模板编译之后'+new Date().getTime());
  },
  beforeUpdate(){
    console.log('组件更新之前'+new Date().getTime());
  },
  update(){
    console.log('组件更新之后'+new Date().getTime());
  },
  beforeDestroy(){
    console.log('组件销毁前'+new Date().getTime());
  },
  destroyed(){
    console.log('组件销毁之后'+new Date().getTime());
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
