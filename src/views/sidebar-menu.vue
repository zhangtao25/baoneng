<template>
  <el-menu
    default-active="1-1"
    class="sidebar-menu"
    background-color="#2f4050"
    text-color="#aeb4b9" :collapse="isCollapseSideMenuState"
    @select="handleMenuSelect">
    <div class="logo">
      <img src="./../assets/logo.png" alt="">
      <span :style="{color: '#aeb4b9',visibility:isCollapseSideMenuState?'hidden':'visible'}">宝能智慧能源云平台</span>
    </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">工厂模型</span>
      </template>
      <el-menu-item index="1-1">计量项管理</el-menu-item>
      <el-menu-item index="1-2">能源项目管理</el-menu-item>
      <el-submenu index="1-3">
        <span slot="title">基础代码维护</span>
        <el-menu-item index="1-3-1">扩展数据维护</el-menu-item>
        <el-menu-item index="1-3-2">指标类别维护</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">我的关注</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">能源实绩</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return{
        menuData:{
          '1': '工厂模型',
          '1-1': '计量项管理',
          '1-2': '能源项目管理',
          '1-3':'基础代码维护',
          '1-3-1': '扩展数据维护',
          '1-3-2': '指标类别维护',
          '2': '我的关注',
          '3': '能源实绩'
        }
      }
    },
    methods:{
      handleMenuSelect(index,indexPath){
        if (index == '1-1'){
          this.$router.push('/main/page1')
        } else if (index == '1-2'){
          this.$router.push('/main/page2')
        } else {}
        this.$emit('give-indexpath',indexPath.map((value)=>{
          return this.menuData[value]
        }))
      }
    },
    computed:{
      ...mapGetters(['isCollapseSideMenuState'])
    }
  };
</script>
<style>
  .sidebar-menu{
    overflow: hidden;
    min-height: 600px;
    position: absolute;
    height: 100vh;
  }
  .sidebar-menu:not(.el-menu--collapse) {
    width: 200px;
  }
  .sidebar-menu .logo{
    width: 200px;
    height: 60px;
    background-color: #2f4050;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sidebar-menu .logo img{
    width: 30px;margin-right: 10px
  }
</style>
