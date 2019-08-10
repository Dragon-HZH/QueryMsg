<template>
    <div>
        <jianjie-banner />
        <!-- content -->
        <div class="content">
            <div class="first">
                <h3>公司简介</h3>
                <div class="t-box">
                    <img src="img/janjie/jj-1.png" />
                    <div class="box">
                        <p>
                            2019年,企欣査正式成立。企欣査隶属于上海爱企网络科技有限公司。作为一家“互联网+"企业服务平台,爱企网致力于为各大中小企业提供专业、有效的B2B服务。
                        </p>
                        <p>
                            专业的人做专业的事”,这条现代社会的基本原则在中小微创企业中却显得尤为奢侈。从内到外的各种复杂业务,让无数企业为之分心。爱企网致力于为中小微创企业提供专业、全面的企业服务型产品,让企业只需专注自身的核心领域,提升“专注度”与“竟争力”,轻兵上阵领先他人
                        </p>
                    </div>
                </div>
                <!-- 图标圆 -->
                <div class="cricle">
                    <span>诚信</span>
                    <span>创新</span>
                    <span>高效</span>
                </div>
                <!-- 资质证书 -->
                <h4>资质证书</h4>
                <div class="zizhi">
                    <div>
                        <img src="img/janjie/jj-2.png" alt="">
                        <span>公司营业执照</span>
                    </div>
                    <div>
                        <img src="img/janjie/jj-2.png" alt="">
                        <span>公司营业执照</span>
                    </div>
                    <div>
                        <img src="img/janjie/jj-2.png" alt="">
                        <span>公司营业执照</span>
                    </div>
                </div>
                <h4 class="fz-title">发展历程</h4>
                <div class="licheng">
                    <div class="shu"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import JianjieBanner from "@/components/banner/JianjieBanner.vue"
    export default {
        data(){
           return {
               
           }
        },
        components:{
            JianjieBanner
        }
   }
</script>
<style scoped>
.content{
    width: 1240px;
    margin: 82px auto 0;
}
.first>h3{
    font-size: 42px;
    position: relative;
    margin-bottom: 70px;
}
.first>h3::before{
    content: '';
    display: block;
    width: 40%;
    border-top: 2px dashed #666;
    position: absolute;
    top: 50%;
}
.first>h3::after{
    content: '';
    display: block;
    width: 40%;
    border-top: 2px dashed #666;
    position: absolute;
    top: 50%;
    right: 0;
}

.t-box{
    display: flex;
    justify-content: space-between;
}
.t-box img{
    margin-left: 20px;
    margin-right: 30px;;
}
.t-box .box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.t-box .box p{
    font-size: 24px;
    line-height: 42px;
    text-indent: 2em;
    text-align: left;
}
.cricle{
    display: flex;
    justify-content: space-around;
    margin-top: 47px;
    margin-bottom: 52px;
}
.cricle span{
    width: 126px;
    height: 126px;
    border: 5px solid #69b500;
    border-radius: 50%;
    line-height: 116px;
    box-sizing: border-box;
    color: #69b500;
    font-weight: 600;
    font-size: 28px;
}

.first>h4{
    margin-bottom: 38px;
    color: #ff9303;
    text-align: left;
}
.zizhi{
    display: flex;
    justify-content: space-around;
    padding-bottom: 120px;
    border-bottom: 1px dotted #67b706;
}
.zizhi>div{
    width: 354px;
    height: 247px;
    background: url(/img/janjie/bg-1.png) no-repeat;
    position: relative;
}
.zizhi>div img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.zizhi>div span{
    position: absolute;
    bottom: -35px;
    transform: translateX(-50%);
}
div.first h4.fz-title{
    color: #67b706;
    margin: 32px 10px;
}
.licheng{
    height: 615px;
    position: relative;
}
.shu{
    position: absolute;
    top: 0px;
    left: 50%;
    width: 5px;
    /* border: 1px solid #67b706; */
    background: #67b706;
    height: 80%;
}
</style>