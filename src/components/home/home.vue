<template>
  <div id="home">
    <searchui :prop1="scroll"></searchui>
    <roast-ing></roast-ing>
  </div>
</template>

<script>
  import searchui from './subcomponents/searchui/searchui.vue';
  import roastIng from './subcomponents/roasting/roasting.vue'
  export default {
    name: "home",
    data(){
      return{
        scroll: 0,
      }
    },
    components:{
      searchui,
      roastIng
    },
    methods:{
      menu() {
        if(document.documentElement.scrollTop){
          this.scroll = document.documentElement.scrollTop*0.01;
        }else{
          this.scroll = document.body.scrollTop*0.01;
        }

      }
    },
    mounted: function(){
      window.addEventListener('scroll', this.menu)
    }
  }
</script>

<style lang="scss">
#home{
}
</style>
