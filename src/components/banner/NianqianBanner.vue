<template>
    <div class="banner">
       <div>
           从一开始,
           <p>就建立持久双赢的合作关系</p>
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
  background: url(/img/banner/nianqian.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
div.banner > div {
  width: 742px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 52px;
  color: #fff;
  font-family: '宋体';
  font-weight: 600;
  text-shadow: 1px 1px 3px #000;
  text-align: left;
}
P{
    text-indent: 2em;
    line-height: 58px;
}
</style>