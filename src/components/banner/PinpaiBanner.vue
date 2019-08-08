<template>
    <div class="banner">
       <div>
           <img src="img/banner/pinpai-2.png" >
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
  background: url(/img/banner/pinpai.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
div.banner > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>