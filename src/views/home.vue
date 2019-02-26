<template>
  <div class="home">
    <p>Home界面</p>
    <a-button type="dashed" value="large" @click="log">Dashed</a-button>
    <a-button type="dashed" value="large" @click="back">back</a-button>
    <a-button type="dashed" value="large" @click="clear">clear</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    log() {
      var info = localStorage.getItem('user_info')
      console.log(JSON.parse(info))
    },
    back() {
      this.$router.push('/')
    },
    clear() {
      localStorage.removeItem('user_info')
      var info = localStorage.getItem('user_info')
      console.log(JSON.parse(info))
    },
  }
};
</script>
<style scoped>
</style>
  