<template>
  <div class="navbar-header">
    <div class="right">
      <ul style="display: flex;align-items: center;height: 60px">
        <li>
          <el-badge>
            <i class="el-icon-message-solid"></i>
          </el-badge>
        </li>
        <li>
          <el-badge>
            <i class="el-icon-message"></i>
          </el-badge>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-badge>
            <i class="el-icon-collection-tag"></i>
          </el-badge>
        </li>
        <li @click="changeSideMenuState">
          <el-badge>
            <i class="el-icon-s-fold"></i>
          </el-badge>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    methods:{
      ...mapActions(['changeSideMenuState']),
      fn(){

      }
    }
  }
</script>
<style>
  .navbar-header{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  ul>li>.el-badge>i{
    font-size: 16px;
    color: #999c9e;
    width: 36px;
  }
</style>
