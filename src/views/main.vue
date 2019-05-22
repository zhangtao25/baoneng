<template>
  <el-container>
    <el-aside style="width: 200px;background-color: #2f4050;height: 100vh">
      <div class="logo">
        <img src="./../assets/logo.png" alt="">
        <span style="color: #aeb4b9">宝能智慧能源云平台</span>
      </div>
      <el-menu
              default-active="1-4-1"
              class="el-menu-vertical-demo"
              background-color="#2f4050"
              text-color="#aeb4b9">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container style="overflow-y: auto;height: 100vh;background-color: azure">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span style="color: white">王小虎</span>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer style="background-color: #fff;height: 39px;display: flex;justify-content: space-between;align-items: center">
        <span>Copyright 上海宝能信息科技有限公司 © 2018 - 2021</span>
        <span>宝能智慧能源云平台</span>
      </el-footer>
    </el-container>
  </el-container>
</template>
<style>
  .el-header {
    background-color: #2f4050;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    padding-right: 0;
  }
  .el-menu{
    border-right: none;
  }
  .logo{
    width: 200px;height: 60px;background-color: #2f4050;display: flex;justify-content: center;align-items: center
  }
  .logo img{
    width: 30px;margin-right: 10px
  }
</style>

<script>
  export default {
    data() {
      return{}
    }
  };
</script>