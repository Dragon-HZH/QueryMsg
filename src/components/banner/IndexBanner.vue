<template>
  <div class="banner">
    <div>
      <div class="title">
        <img src="img/banner/index-2.png" />
      </div>
      <div class="form">
        <div>
          <h3 class="title-h3">
            商家登陆
            <span>(使用已经注册的会员账号登陆)</span>
          </h3>
        </div>

        <div class="login">
          <div>
            <label for="uname">用户:</label>
            <input type="text" id="uname" />
          </div>
          <div>
            <label for="pwd">密码:</label>
            <input type="password" id="pwd" />
          </div>
          <div>
            <label for="yanzheng">验证码:</label>
            <input type="text" id="yanzheng" />
            <div id="number">{{msg}}</div>
          </div>
          <div class="btn-login">
            <button>登陆</button>
            <router-link to>忘记密码?</router-link>
          </div>
        </div>

        <h3 class="foot-h3">
          还没有成为我们的合作用户?
          <router-link to>快速注册</router-link>
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 159357
    };
  }
};
</script>
<style scoped>
div.banner {
  height: 445px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  border-top: 4px solid #00f;
  background: url(/img/banner/index.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
div.banner > div {
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  /* border: 1px solid red; */
}
div.title {
  width: 509px;
  height: 288px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
div.form {
  width: 350px;
  height: 375px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  float: right;
  border-radius: 10px;
  color: #fff;
}
div.form div:first-child {
  padding: 0 3px;
}
.title-h3 {
  line-height: 40px;
  margin-top: 10px;
  font-size: 18px;
  text-align: left;
  padding-left: 20px;
  border-bottom: 1px solid #616c8a;
}
.title-h3 span {
  color: #ff0;
  font-size: 14px;
}

.login {
  height: 272px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.login > div {
  line-height: 35px;
  position: relative;
}
.login div label {
  font-size: 14px;
  display: block;
  width: 80px;
  height: 35px;
  line-height: 35px;
  box-sizing: border-box;
  text-align: left;
  padding-left: 20px;
}
.login div input {
  position: absolute;
  top: 0px;
  left: 80px;
  width: 240px;
  box-sizing: border-box;
  line-height: 35px;
  border-radius: 4px;
  outline: none;
  border: 0;
  padding-left: 15px;
  font-size: 18px;
}
#yanzheng {
  width: 103px;
}
#number {
  width: 120px;
  height: 100%;
  background: #ff0;
  border-radius: 2px;
  position: absolute;
  top: 0px;
  right: 25px;
  text-align: center;
  font-size: 22px;
  color: red;
  letter-spacing: 3px;
}
.btn-login button {
  margin-right: 30px;
  width: 92px;
  height: 29px;
  border-radius: 1px;
  background: #092cba;
  border: 1px solid #fff;
  outline: 0;
  font-size: 14px;
  letter-spacing: 3px;
  color: #fff;
  cursor: pointer;
}
.btn-login a {
  color: #fff;
  font-size: 14px;
}

.foot-h3 {
  background: rgba(0, 0, 0, 0.5);
  line-height: 52px;
  border-radius: 0 0 10px 10px;
  font-size: 14px;
}
.foot-h3 a{
    margin-left: 10px;
    color: #ff0;
}
</style>