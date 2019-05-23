<template>
  <div id="login">
    <div class="bg_blue"></div>
    <div class="bg_op"></div>
    <div class="margin">
      <div>
        <p>
          <img style="width: 40px" src="./../assets/logo.png" alt="">
          <span style="color: #a9a9a9;font-size: 36px">智慧能源管理平台</span>
        </p>
        <p style="font-size: 72px;color: white;margin: 50px 0 0 50px">
          智能+效益
        </p>
        <p style="font-size: 16px;color: white;margin-left: 100px">
          愈锤炼，愈精益    用心造就卓越
        </p>
      </div>
      <div class="ccc"></div>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style>
  #login{
    width: 100%;
    height: 100%;
    background-image: url("http://www.shbaoneng.com:8091/static/images/bg/bg-6.jpg");
    background-size: cover;
    position: absolute;
    min-width: 1000px;
    z-index: -3;
  }
  #login>.margin{
    min-width: 1000px;
    padding: 0 50px;
    box-sizing: border-box;
    width: 80vw;
    height: 380px;
    position: absolute;
    /*background-color: seashell;*/
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: space-between;
  }
  .bg_blue{
    width: 100%;
    height: 237px;
    background: #347ebc;
    opacity: 0.6;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
  }
  .ccc{
    width: 375px;
    height: 300px;
    background: #fff;
    position: relative;
    /*margin: auto;*/
    top: 50%;
    z-index: 1;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    transform: translate(0,-50%)
  }
  .bg_op{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    background-color: rgb(0, 0, 0);
    opacity: 0.4;
  }
</style>
