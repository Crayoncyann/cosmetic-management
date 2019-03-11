<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh" class="home">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="author">
        <img class="author-img" :class="{ 'img-op': logoutState }" src="../image/login/author.jpg" alt="logout" title="logout" @click="logout">
        <a-spin v-if="logoutState" id="load" size="large"/>
      </div>
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="pie-chart"/>
            <span>订单信息</span>
          </span>
          <a-menu-item key="1" @click="toForm">统计</a-menu-item>
          <a-menu-item key="2" @click="toForm">已完成</a-menu-item>
          <a-menu-item key="3" @click="toForm">未完成</a-menu-item>
        </a-sub-menu>
        <!-- <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="desktop"/>
            <span>产品类型</span>
          </span>
          <a-menu-item key="3" @click="toForm">产品类型</a-menu-item>
        </a-sub-menu> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; font-size: 20px;">
        <p>{{ this.$route.name }}</p>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <!-- <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>-->
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">注册信息</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      logoutState: false,
    };
  },
  methods: {
    logout() {
      this.$message.success("正在登出...");
      this.logoutState = !this.logoutState
      setTimeout(() => {
        this.$router.push('/')
      }, 2000);
    },
    toForm(e) {
      // 当前路径可以获取元素value
      var value = e.item.$el.innerHTML
      this.$router.push({name: `${value}`})
    }
  }
};
</script>

<style>
.home .author #load{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home .author {
  position: relative;
  height: 40px;
  margin: 20px;
}
.home .author .author-img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  transition: 0.6s;
}
.home .author .author-img:hover {
  transform: translateY(-3px);
}
.home .author .img-op {
  opacity: 0.5;
}
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>