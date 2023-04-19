<template>
  <body>
  <div class="container" id="container">
    <div class="form-container sign-up-container">
      <form action="#">
        <h1 style="color: #1a1a1a">注 册</h1>
        <div class="social-container">
          <a href="#" class="social"><img src="../assets/icon/qq.png" alt="#"/></a>
          <a href="#" class="social"><img src="../assets/icon/weibo.png" alt="#"/></a>
          <a href="#" class="social"><img src="../assets/icon/weixin.png" alt="#"/></a>
        </div>
        <span>使用您的邮箱注册吧！</span>
        <input type="text" placeholder="Name" v-model="form.name"/>
        <input type="email" placeholder="Email" v-model="form.email"/>
        <input type="password" placeholder="Password" v-model="form.password"/>
        <el-button type="text" @click="register" class="elButton">注 册</el-button>
      </form>
    </div>
    <div class="form-container sign-in-container">
      <form action="#">
        <h1 style="color: #1a1a1a">小🐑的花店</h1>
        <div class="social-container">
          <a href="#" class="social"><img src="../assets/icon/qq.png" alt="#"/></a>
          <a href="#" class="social"><img src="../assets/icon/weibo.png" alt="#"/></a>
          <a href="#" class="social"><img src="../assets/icon/weixin.png" alt="#"/></a>
        </div>
        <span>或者使用您的账户!</span>
        <input type="email" placeholder="email" v-model="form.email"/>
        <input type="password" placeholder="Password" v-model="form.password"/>
        <a href="#">找回您的密码?</a>
        <el-button type="text" @click="login" class="elButton">登 录</el-button>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>敬请登录!</h1>
          <p>请输入您的个人信息登录，以保持与我们的联系！</p>
          <button class="ghost" id="signIn">登 录</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>你好,朋友!</h1>
          <p>输入您的个人信息，与我们一起开始旅程！</p>
          <button class="ghost" id="signUp">注 册</button>
        </div>
      </div>
    </div>
  </div>
  </body>

</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    changeType() {
      this.isLogin = !this.isLogin
      this.form.name = ''
      this.form.email = ''
      this.form.password = ''
    },
    login() {
      this.$confirm('请确保邮箱和密码的准确性，是否继续登录?', '提示', {
        confirmButtonText: '继续',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(action => {
        if (action === 'confirm') {
          const self = this;
          if (self.form.email !== "" && self.form.password !== "") {
            self.$axios({
              method: 'post',
              url: 'http://127.0.0.1:3000/api/users/login',
              data: {
                email: self.form.email,
                password: self.form.password
              }
            })
              .then(res => {
                switch (res.data.code) {
                  case 0:
                    this.$message({
                      type: 'success',
                      message: '登录成功！！！'
                    });
                    window.localStorage.setItem('user_info', JSON.stringify(res.data.data))
                    this.$router.push('/')
                    break;
                  case -1:
                    this.$message({
                      type: 'error',
                      message: '邮箱填写错误！！！'
                    });
                    break;
                  case 1:
                    this.$message({
                      type: 'error',
                      message: '密码填写错误！！！'
                    });
                    break;
                }
              })
              .catch(err => {
                console.log(err);
              })
          } else {
            this.$message({
              type: 'error',
              message: '填写不能为空！！！'
            })
          }
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消登录！！！'
        });
      })
    },
    register() {
      this.$confirm('请确保邮箱和密码的准确性，是否继续注册?', '提示', {
        confirmButtonText: '继续',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(action => {
        if (action === 'confirm') {
          const self = this;
          if (self.form.name !== "" && self.form.email !== "" && self.form.password !== "") {
            self.$axios({
              method: 'post',
              url: 'http://127.0.0.1:3000/api/users/add',
              data: {
                name: self.form.name,
                email: self.form.email,
                password: self.form.password
              }
            })
              .then(res => {
                switch (res.data.code) {
                  case 0:
                    this.$message({
                      type: 'success',
                      message: '欢迎您的加入！！！'
                    });
                    break;
                  case -1:
                    this.$message({
                      type: 'error',
                      message: '邮箱已经存在，请重新填写！！！'
                    });
                    self.form.email = ''
                    self.form.password = ''
                    break;
                }
              })
              .catch(err => {
                console.log(err);
              })
          } else {
            this.$message({
              type: 'error',
              message: '填写不能为空！！！'
            });
          }
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消注册！！！'
        });
      })
    }
  },
  mounted() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    console.log(signUpButton)
    console.log(signInButton)
    console.log(container)

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈大楷";
  font-weight: 400;
  src: url("../assets/font/LgK06S4m0hRkPOzVCOfRO.woff2") format("woff2"),
  url("../assets/font/LgK06S4m0hRkPOzVCOfRO.woff") format("woff");
  font-display: swap;
}

/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "仓耳渔阳体 W04";
  font-weight: 400;
  src: url("../assets/font/CNLK1s70x9zgPCefUeCZO.woff2") format("woff2"),
  url("../assets/font/CNLK1s70x9zgPCefUeCZO.woff") format("woff");
  font-display: swap;
}

@font-face {
  font-family: "bota";
  font-weight: 400;
  src: url("../assets/font/BoTa-2.otf");
  font-display: swap;
}

@font-face {
  font-family: "xiao";
  font-weight: 400;
  src: url("../assets/font/XiaoKeNaiLaoTiShangYongMianFei@QingKeZiTi-2.ttf");
  font-display: swap;
}

h1 {
  font-weight: bold;
  margin: 0;
  font-family: "xiao", serif;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 1px;
  margin: 20px 0 30px;
}

body {
  height: 100%;
  width: 100%;
  background-image: url("../assets/img/background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: '阿里妈妈大楷', sans-serif;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
  0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 33%;
  min-width: 800px;
  max-width: 100%;
  height: 45%;
  min-height: 520px;
}

span {
  font-size: 12px;
  margin-bottom: 10px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.elButton, button {
  border-radius: 20px;
  border: 1px solid #e7b8c0;
  background-color: rgba(253, 186, 214);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.elButton:active, button:active {
  transform: scale(0.95);
}

.elButton:focus, button:focus {
  outline: none;
}

.elButton.ghost button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #77a6c5;
  background: -webkit-linear-gradient(to right, #84b6d9, #87b0b6);
  background: linear-gradient(to right, rgb(231, 142, 186), rgb(216, 191, 213));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  /*align-items: center;*/
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
</style>
