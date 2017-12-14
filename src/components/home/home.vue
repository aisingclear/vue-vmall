<template>
  <div id="home">
    <searchui :prm="scroll"></searchui>
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
    <img src="https://res.vmallres.com/pimages//sale/2017-12/20171212185808325.png" alt="" width="414px" height="100%">
  </div>
</template>

<script>
  import searchui from './subcomponents/searchui/searchui.vue'
  export default {
    name: "home",
    data(){
      return{
        scroll: 1,
      }
    },
    components:{
      searchui
    },
    methods:{
      menu() {
        this.scroll = document.documentElement.scrollTop*0.01;
        console.log(this.scroll)
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
