<template>
   <div class="foot">
      <footer>
         <div class="f-left">
            <img src="img/other/dianhua.png">
            <p>
               0000-4732612
            </p>
         </div>
         <div class="f-right">
            全国免费电话: 400-000-*** 版权所有: 江苏****资产投资管理有限公司苏CP备1******7号-9
         </div>
      </footer>
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
div.foot{
   background: linear-gradient(to top,#00f 0%,#4267fe 35%,#4267fe 65%,#00f 100%)
}
footer{
   width: 1024px;height: 265px;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
   align-items: center;
   font-size: 20px;
   color: #fff;
}
.f-left{

}
.f-right{
   width: 60%;
}
</style>