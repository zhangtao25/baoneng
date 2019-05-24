<template>
  <div id="main">
    <sidebar-menu @give-indexpath="onchangeBreads"></sidebar-menu>
    <div class="container" :style="{marginLeft:isCollapseSideMenuState?'65px':'201px'}">
      <header style="color: white">
        <div class="color-block"></div>
        <navbar-header></navbar-header>
      </header>
      <main>
        <breadcrumb :currentPath="breads"></breadcrumb>
        <div class="wrap">
          <router-view/>
        </div>
      </main>
      <footer>
        <span>Copyright 上海宝能信息科技有限公司 © 2018 - 2021</span>
        <span>宝能智慧能源云平台</span>
      </footer>
    </div>
  </div>
</template>
<script>
  import SidebarMenu from './sidebar-menu'
  import Breadcrumb from './breadcrumb'
  import NavbarHeader from './navbar-header'
  import {mapGetters} from 'vuex'
  export default {
    components:{
      'sidebar-menu': SidebarMenu,
      'breadcrumb': Breadcrumb,
      'navbar-header': NavbarHeader
    },
    data(){
      return{
        breads:[],
      }
    },
    methods:{
      onchangeBreads(val){
        this.breads=val;
      }
    },
    computed:{
      ...mapGetters(['isCollapseSideMenuState'])
    }
  };
</script>
<style>
  #main{
    height: 100vh;
    position: relative;
  }
  #main>.container{
    transition: all .5s ease 0s;
    margin-left: 201px;
  }
  #main>.container>header{
    position: relative;
    height: 60px;
    background-color: #2f4050;
  }
  #main>.container>header .color-block{
    height: 60px;
    width: 100px;
    background-color: #2f4050;
    position: absolute;
    left: -100px;
    z-index: -4
  }
  #main>.container>footer{
    background-color: #fff;
    height: 40px;display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f3f3f4;
    border-bottom: 1px solid #f3f3f4;
    box-sizing: border-box;
    padding: 0 10px;
  }
  #main>.container>main{
    height: calc(100vh - 100px);
    min-height: 500px;
    overflow-y:auto;
    padding: 10px;
    box-sizing: border-box;
    background-color: #f3f3f4;
    position: relative;
    width: 100%;
  }
  #main>.container>main>.wrap{
    border: 1px solid #e7eaec;
    padding: 10px;
    background-color: white;
    position: absolute;
    width: calc(100% - 40px);
  }
</style>

