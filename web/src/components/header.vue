<template xmlns="http://www.w3.org/1999/html">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">


    <img src="../assets/icon/yangyang.svg" alt="" class="header_icon"
         @click="$router.push({name: 'home'},onComplete => {}, onabort => {})"/>
    <span v-show="showName">
      <p class="login_name">{{ userInfo.name }} , 欢迎您光临小🐏的花店</p>
      <el-menu-item index="4" @click="loginOut" class="loginOut">退出登录</el-menu-item>
    </span>


    <span v-show="!showName">
      <p>小🐏的花店</p>
      <el-menu-item index="4" @click="toLogin" class="login">登录</el-menu-item>
    </span>

    <el-submenu index="3">
      <template slot="title">商品分类</template>
      <el-menu-item index="3-1"><a href="#langmandeai"> 浪漫的爱 (づ￣3￣)づ</a></el-menu-item>
      <el-menu-item index="3-2"><a href="#youyiwansui"> 友谊万岁 ~\(≧▽≦)/~</a></el-menu-item>
      <el-menu-item index="3-3"><a href="#ganxiewenhou"> 感谢问候 (p≧w≦q)</a></el-menu-item>
      <el-menu-item index="3-4"><a href="#aisidaoqian"> 哀思道歉 <(＿　＿)></a></el-menu-item>
      <el-menu-item index="3-5"><a href="#shangwukaiye"> 商务开业 ヾ(^▽^*)))</a></el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><a href="#xianhuayongtu">鲜花用途</a></el-menu-item>
    <el-menu-item index="1"><a href="#lunbo">首页</a></el-menu-item>
  </el-menu>

</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      showName: false,
      userInfo: {}
    };
  },
  mounted() {
    let userInfo = window.localStorage.getItem('user_info');
    if (userInfo !== null) {
      this.userInfo = JSON.parse(userInfo);
      this.showName = true;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toLogin() {
      this.$router.push('login')
    },
    loginOut() {
      const userInfo = window.localStorage.getItem('user_info');
      if (userInfo != null) {
        window.localStorage.removeItem('user_info');
        window.location.reload();
      }
    }
  }
}
</script>

<style scoped>
* {
  font-weight: bold;
  z-index: 999;
}

.header_icon {
  padding: 15px 30px;
  float: left;
}

.login_name {
  padding: 2px;
}

.login {
  float: right;
  height: 60px;
  color: #909399;
}

.loginOut {
  float: right;
  height: 60px;
  color: #909399;
}

p {
  float: left;
}

@font-face {
  font-family: "xiao";
  font-weight: 400;
  src: url("../assets/font/XiaoKeNaiLaoTiShangYongMianFei@QingKeZiTi-2.ttf");
  font-display: swap;
}

.el-menu {
  width: 100%;
  font-family: "xiao", serif;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  scroll-behavior: smooth;
}

.el-menu.el-menu--horizontal {
  border-bottom: solid 0;
}

.el-menu--horizontal > .el-subMenu .el-subMenu_title {
  color: #ffffff;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  background-color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.el-menu--horizontal > .el-menu-item {
  float: right;
}

.el-menu--horizontal > .el-submenu {
  float: right;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #d994a0;
}

.el-submenu.is-active /deep/ .el-submenu__title {
  border-bottom: 2px solid #d994a0;
}

a, a:link{
  text-decoration:none;
  color: #909399;
}

a:hover, a:active{
  color: #1a1a1a;
}
</style>
