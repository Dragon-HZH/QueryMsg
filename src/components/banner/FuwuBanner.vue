<template>
    <div class="banner">
       <div>
           服务企业全生命周期
       </div>
    </div>
</template>
<script>
    export default {
        data(){
           return {
               
           }
        }
   }
</script>
<style scoped>
div.banner {
  height: 445px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  border-top: 4px solid #00f;
  background: url(/img/banner/fuwu.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
div.banner > div {
  width: 533px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 58px;
  color: #fff;
  font-family: '宋体';
  font-weight: 600;
  text-shadow: 1px 1px 3px #000;
}
</style>