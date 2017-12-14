<template>
    <header class="sear-top">
      <div class="opac" style="background: rgba(255,255,255,.46);">
        <div class="sear-left">
          <a href="#">
            <input type="text" readonly='readonly' placeholder="HUAWEI Mate 10 荣耀V10">
          </a>
        </div>
        <div class="logi-right">
          <span class="news-right"></span>
          <span class="logi-right">登录</span>
        </div>
      </div>
    </header>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {

      }
    },
    watch: {

    }
  }
</script>

<style lang="scss">
$r:41.4;
.sear-top{
  width: 414rem/$r;
  height: 46rem/$r;
  position: fixed;
  top: 0;
  .opac{
    width: 100%;
    height: 100%;
    .sear-left{
      width: 298rem/$r;
      height: 100%;
      margin-left: 18rem/$r;
      a{
        display: block;
        height: 100%;
        input{
          width: 298rem/$r;
          height: 31.391rem/$r;
          border: 0;
          outline: none;
          position: absolute;
          top: 7.295rem/$r;
          border-radius: 15rem/$r;
          text-indent: 42rem/$r;
          font-size: 14rem/$r;
          color: #888888;
          background-image: url(https://res8.vmallres.com/nwap/20171124/images/echannelWap/icon/icon_search.png);
          background-repeat: no-repeat;
          -webkit-background-size: 25rem/$r 25rem/$r;
          background-size: 25rem/$r 25rem/$r;
          background-position: 9rem/$r 4rem/$r;
        }
      }
    }
  }
}
</style>
