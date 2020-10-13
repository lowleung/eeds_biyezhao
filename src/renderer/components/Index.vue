<template>
  <div class="wrapper">
    <div class="title">毕业照查询</div>
    <div class="btn1" @click="go_list"></div>
    <div class="btn2" @click="go_search"></div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data() {
    return {}
  },
  methods: {
    go_list() {
      let audio = document.createElement('audio')
      audio.src = 'static/click.wav'
      audio.play()
      this.$router.push({ name: 'list' })
    },
    go_search() {
      let audio = document.createElement('audio')
      audio.src = 'static/click.wav'
      audio.play()
      this.$router.push({ name: 'search' })
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
}
.title {
  font-family: 'siyuan';
  font-size: 96px;
  position: absolute;
  color: #716955;
  left: 50%;
  top: 260px;
  transform: translateX(-50%);
}
.btn1 {
  width: 387px;
  height: 106px;
  position: absolute;
  background: url('../assets/btn1.png');
  left: 450px;
  top: 600px;
}
.btn2 {
  width: 387px;
  height: 106px;
  position: absolute;
  background: url('../assets/btn2.png');
  right: 450px;
  top: 600px;
}
</style>
