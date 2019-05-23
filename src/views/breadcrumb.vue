<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" style="padding: 10px 0">
    <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in currentPath" :key="index">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style>

</style>
<script>
  export default{
    data(){
      return {}
    },
    props:['currentPath']
  }
</script>