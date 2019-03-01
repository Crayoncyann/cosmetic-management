<template>
  <div class="home">
    <p>这是另外一个</p>
    <a-button type="dashed" value="large" @click="log">这是另外一个</a-button>
    <a-button type="dashed" value="large" @click="back">这是另外一个</a-button>
    <a-button type="dashed" value="large" @click="clear">这是另外一个</a-button>
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
  