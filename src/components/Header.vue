<template>
  <div class="header">
    <nav>
      <!-- log图片 -->
      <div class="log">
        <img src="img/other/qixincha.png" />
        <!-- 列表1 -->
        <ul class="clear-float">
          <li>
            <router-link to class="txt-color">
              <span class="iconfont icon-shouye-copy"></span>商家入驻申请
            </router-link>
          </li>
          <li>
            <router-link to class="txt-color">
              <span class="iconfont icon-yonghu"></span>商家管理中心
            </router-link>
          </li>
          <li>
            <router-link to class="txt-color">
              <span class="iconfont icon-tubiao-"></span>商家帮助指南
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 菜单 -->
      <div class="munt">
        <!-- 商品分类菜单 -->
        <div class="munt-left">
          <div>所有商品分类</div>
          <div class="product">
            <ul>
              <li>
                <router-link to>
                  <span class="iconfont icon-gongshang_"></span>工商财税
                </router-link>
              </li>
              <li>
                <router-link to>
                  <span class="iconfont icon-r"></span>知识产权
                </router-link>
              </li>
              <li>
                <router-link to>
                  <span class="iconfont icon-rongzifuwu"></span>融资服务
                </router-link>
              </li>
              <li>
                <router-link to>
                  <span class="iconfont icon-pintu1"></span>科技创新
                </router-link>
              </li>
              <li>
                <router-link to>
                  <span class="iconfont icon-zichan"></span>资产管理
                </router-link>
              </li>
              <li>
                <router-link to>
                  <span class="iconfont icon-falv"></span>法律事务
                </router-link>
              </li>
              <li>
                <router-link to>
                  <span class="iconfont icon-hulianwang"></span>互联网服务
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 页面跳转导航 -->
        <ul class="munt-center clear-float">
          <li>
            <router-link to class="munt-a">首页</router-link>
          </li>
          <li>
            <router-link to class="munt-a">公司简介</router-link>
          </li>
          <li>
            <router-link to class="munt-a">品牌愿景</router-link>
          </li>
          <li>
            <router-link to class="munt-a">服务领域</router-link>
          </li>
          <li>
            <router-link to class="munt-a">年签客户</router-link>
          </li>
          <li>
            <router-link to class="munt-a">联系我们</router-link>
          </li>
        </ul>
        <div class="munt-right">
          <img src="img/other/laba.png" />
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
nav {
  width: 1024px;
  height: 140px;
  box-sizing: border-box;
  padding-top: 35px;
  margin: 0 auto;
  padding-left: 3px;
}

div.log {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
div.log > img {
  margin-left: 35px;
}
div.log > ul {
  margin-right: 110px;
}
div.log > ul li {
  float: left;
  margin-left: 40px;
}
div.log > ul li span {
  vertical-align: middle;
  color: #808080;
}
a.txt-color {
  color: #808080;
  display: block;
  font-weight: 600;
  font-size: 12px;
  height: 100%;
}
/* 鼠标效果 */
a.txt-color:hover,
a.txt-color:hover span {
  color: #f00;
}

/* 菜单 */
div.munt {
  margin-top: 20px;
  display: flex;
}
/* 左侧按钮 */
.munt-left {
  width: 210px;
  height: 37px;
  background: #00f;
  font-size: 16px;
  line-height: 37px;
  color: #fff;
  text-align: left;
  position: relative;
  margin-right: 2px;
  cursor: pointer;
}
.munt-left div:first-child {
  padding-left: 15px;
}
.munt-left::before {
  content: "";
  width: 0;
  height: 0;
  display: block;
  border: 7px solid transparent;
  border-top: 12px solid #fff;
  position: absolute;
  top: 13px;
  right: 15px;
}
.munt-left:hover .product {
  display: block;
}
.product {
  padding-top: 6px;
  display: none;
}
.product li a,
.product li span {
  color: #fff;
  font-size: 16px;
}
.product li span {
  margin: 0px 20px 0 10px;
  vertical-align: middle;
}
.product li span::before {
  font-size: 28px;
}

.product li {
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 0 5px 15px;
}
/* .product li:hover span,
.product li:hover a {
  color: #00f;
} */
.product li:hover {
  background: rgba(0, 0, 0, 0.2);
}

/* 中菜单 */
.munt-center li {
  float: left;
  margin-left: 30px;
  line-height: 37px;
}
/* .munt-center li:first-child>a{
  padding: 0 30px;
} */

a.munt-a {
  display: block;
  /* padding: 0 15px; */
  color: #808080;
}
a.munt-a:hover {
  color: #00f;
}

div.munt-right {
  margin: 0 auto;
  display: flex;
  align-items: center;
}
div.munt-right img {
  cursor: pointer;
}
</style>