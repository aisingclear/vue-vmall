<template>
  <div class="foo">
    <ul>
      <li id="lione" v-on:click="clir1()">
        <router-link tag="a" class="rou" to="/home">
          <div class="icon-red d1 o1"></div>
          <span>首页</span>
        </router-link>
      </li>
      <li id="litwo" v-on:click="clir2()">
        <router-link tag="a" class="rou" to="/category">
          <div class="icon-red d2" ></div>
          <span>分类</span>
        </router-link>
      </li>
      <li id="lithr" v-on:click="clir3()">
        <router-link tag="a" class="rou" to="/car">
          <div class="icon-red d3"></div>
          <span>购物车</span>
        </router-link>
      </li>
      <li id="lifou" v-on:click="clir4()">
        <router-link tag="a" class="rou" to="/pri">
          <div class="icon-red d4"></div>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "routerui",
    data(){
      return {

      }
    },
    methods:{
      clir1: function(){
        var da1 = document.querySelector('#lione div');
        var da2 = document.querySelector('#litwo div');
        var da3 = document.querySelector('#lithr div');
        var da4 = document.querySelector('#lifou div');
        da1.className = 'icon-red d1 o1';
        da2.className = 'icon-red d2';
        da3.className = 'icon-red d3';
        da4.className = 'icon-red d4';
      },
      clir2: function(){
        var da1 = document.querySelector('#lione div');
        var da2 = document.querySelector('#litwo div');
        var da3 = document.querySelector('#lithr div');
        var da4 = document.querySelector('#lifou div');
        da1.className = 'icon-red d1';
        da2.className = 'icon-red d2 o2';
        da3.className = 'icon-red d3';
        da4.className = 'icon-red d4';
      },
      clir3: function(){
        var da1 = document.querySelector('#lione div');
        var da2 = document.querySelector('#litwo div');
        var da3 = document.querySelector('#lithr div');
        var da4 = document.querySelector('#lifou div');
        da1.className = 'icon-red d1';
        da2.className = 'icon-red d2';
        da3.className = 'icon-red d3 o3';
        da4.className = 'icon-red d4';
      },
      clir4: function(){
        var da1 = document.querySelector('#lione div');
        var da2 = document.querySelector('#litwo div');
        var da3 = document.querySelector('#lithr div');
        var da4 = document.querySelector('#lifou div');
        da1.className = 'icon-red d1';
        da2.className = 'icon-red d2';
        da3.className = 'icon-red d3';
        da4.className = 'icon-red d4 o4';

      }
    }
  }
</script>

<style lang="scss">
  $r:41.4;
  .foo{
    width: 414rem/$r;
    height: 55.188rem/$r;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #eee;
    background: #fff;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      li{
        flex: 1;
        font-size: 12rem/$r;
        color: #eee;
        text-align: center;
        a{
          -moz-text-decoration-color: #878787;
          text-decoration-color: #878787;
          color: #878787;
          display: block;
          .icon-red{
            width: 26rem/$r;
            height: 26rem/$r;
            display: block;
            margin-left: 39rem/$r;
            margin-top: 8rem/$r;
          }
          .icon-red.d1{
            background-image: url(./img/home0.png);
            -webkit-background-size: 10rem/$r 10rem/$r;
            background-size: 23rem/$r 23rem/$r;
            background-repeat: no-repeat;
            background-position: 2rem/$r 0px;
          }
          .icon-red.d1.o1{
            background-image: url(./img/home1.png);
            -webkit-background-size: 10rem/$r 10rem/$r;
            background-size: 23rem/$r 23rem/$r;
            background-repeat: no-repeat;
            background-position: 2rem/$r 0px;
          }
          .icon-red.d2{
            background-image: url(./img/category0.png);
            -webkit-background-size: 10rem/$r 10rem/$r;
            background-size: 23rem/$r 23rem/$r;
            background-repeat: no-repeat;
            background-position: 2rem/$r 0px;
          }
          .icon-red.d2.o2{
            background-image: url(./img/category1.png);
            -webkit-background-size: 10rem/$r 10rem/$r;
            background-size: 23rem/$r 23rem/$r;
            background-repeat: no-repeat;
            background-position: 2rem/$r 0px;
          }
          .icon-red.d3{
            background-image: url(./img/car0.png);
            -webkit-background-size: 10rem/$r 10rem/$r;
            background-size: 23rem/$r 23rem/$r;
            background-repeat: no-repeat;
          }
          .icon-red.d3.o3{
            background-image: url(./img/car1.png);
            -webkit-background-size: 10rem/$r 10rem/$r;
            background-size: 23rem/$r 23rem/$r;
            background-repeat: no-repeat;
          }
          .icon-red.d4{
            background-image: url(./img/private0.png);
            -webkit-background-size: 10rem/$r 10rem/$r;
            background-size: 23rem/$r 23rem/$r;
            background-repeat: no-repeat;
            background-position: 2rem/$r 0px;
          }
          .icon-red.d4.o4{
            background-image: url(./img/private1.png);
            -webkit-background-size: 10rem/$r 10rem/$r;
            background-size: 23rem/$r 23rem/$r;
            background-repeat: no-repeat;
            background-position: 2rem/$r 0px;
          }
          .router-link-exact-active img{

          }
          span{
            display: block;
          }
        }
        .router-link-exact-active{
          color: #da0000;
        }
      }
    }
  }

</style>
