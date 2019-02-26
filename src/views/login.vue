<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <img class="title" src="../image/login/logo.png" alt="">
      </a-layout-header>
      <a-layout-content>
        <div class="login">
          <img class="author" src="../image/login/author.jpg" alt="author">
          <div class="components-input-demo-presuffix">
            <a-input
              placeholder="user"
              v-model="userName"
              ref="userNameInput"
              size="large"
              maxlength="10"
            >
              <a-icon slot="prefix" type="user"/>
              <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty1"/>
            </a-input>
          </div>
          <div class="components-input-demo-presuffix margin">
            <a-input
              placeholder="password"
              v-model="password"
              ref="passwordInput"
              size="large"
              type="password"
              id="inputPassword"
              maxlength="10"
            >
              <a-icon slot="prefix" type="lock"/>
              <a-icon v-if="password" slot="suffix" type="close-circle" @click="emitEmpty2"/>
              <a-icon
                class="icon-eye"
                v-if="inputState"
                slot="suffix"
                type="eye-invisible"
                @click="showPassword"
              />
              <a-icon class="icon-eye" v-else slot="suffix" type="eye" @click="showPassword"/>
            </a-input>
          </div>
          <a-button type="primary" size="large" @click="login">Login</a-button>
          <a-spin v-if="loginState" size="large"/>
        </div>
      </a-layout-content>
      <a-layout-footer>相应的注册信息</a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
const e = selector => document.querySelector(selector);
const log = console.log.bind(console);

export default {
  data() {
    return {
      userName: "",
      password: "",
      inputState: true,
      loginState: false
    };
  },
  methods: {
    emitEmpty1() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    },
    emitEmpty2() {
      this.$refs.passwordInput.focus();
      this.password = "";
    },
    showPassword() {
      this.inputState = !this.inputState;
      var input = e("#inputPassword");
      if (!this.inputState) {
        input.type = "text";
      } else {
        input.type = "password";
      }
    },
    login() {
      log(`用户名：${this.userName}`, `密码：${this.password}`);
      // 示例，123，123，如果相等返回 true
      var user = {
        user: "123",
        password: "123"
      };
      if (this.userName != "123") {
        this.$message.error("用户名为空或用户名不存在");
      } else {
        if (this.password.length > 0 && this.password != "123") {
          this.$message.error("密码错误");
        } else if (this.password == "123") {
          this.$message.success("登录成功");
          this.loginState = !this.loginState;
          setTimeout(() => {
            this.loginState = !this.loginState;
            var info = {
              user: this.userName,
              password: this.password,
            }
            localStorage.setItem('user_info', JSON.stringify(info))
            this.$message.success("登录成功演示结束");
            this.$router.push('/home')
          }, 1000);
        } else {
          this.$message.error("请输入密码");
        }
      }
    }
  },
  mounted() {
    var info = localStorage.getItem('user_info')
    if (info) {
      info = JSON.parse(info)
      this.userName = info.user
      this.password = info.password
    }
  }
};
</script>
<style>
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.author {
  border: 2px solid white;
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 10px;
  transition: all 0.5s;
}
.author:hover {
  transform: translateY(-5px);
}
.icon-eye {
  position: relative;
  margin-left: 10px;
}
.margin {
  margin: 20px 0;
}
.components-input-demo-presuffix .anticon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
}
.components-input-demo-presuffix .anticon-close-circle:hover {
  color: #999;
}
.components-input-demo-presuffix .anticon-close-circle:active {
  color: #666;
}
.login {
  color: black;
  border: 2px solid #a1cfe4;
  padding: 50px;
  background: linear-gradient(to left bottom, #a1cfe4, #dfc388);
  border-radius: 10px;
  box-shadow: 3px 3px 10px #a1cfe4;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header {
  height: 20%;
  position: relative;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  position: relative;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
  height: 100%;
  position: fixed;
  width: 100%;
}
</style>