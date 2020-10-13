<template>
  <div class="wrapper">
    <div class="title">毕业照查询</div>
    <div class="btn1" @click="go_list"></div>
    <div class="btn2" @click="go_search"></div>
  </div>
</template>

<script>
var fs = require('fs')
var extnames = [
  '.jpg',
  '.JPG',
  '.png',
  '.PNG',
  '.bmp',
  '.BMP',
  '.jpeg',
  '.JPEG'
]
export default {
  name: 'index',
  data() {
    return {}
  },
  methods: {
    go_list() {
      this.$router.push({ name: 'list' })
    },
    go_search() {
      this.$router.push({ name: 'search' })
    }
  },
  mounted() {
    var Data = {}
    var path = require('path')
    // var root = path.dirname(process.execPath) + '\\Data\\'
    var root =
      path
        .dirname(process.execPath)
        .split('\\')
        .join('/') + '/Data/'
    if (fs.existsSync(root)) {
      fs.readdirSync(root).forEach(function(mulu) {
        if (fs.statSync(root + mulu).isDirectory()) {
          var Lst = []
          fs.readdirSync(root + mulu).forEach(function(wenjian) {
            if (
              fs.statSync(root + mulu + '/' + wenjian).isFile() &&
              extnames.indexOf(path.extname(wenjian)) >= 0
            ) {
              Lst.push({ name: wenjian, src: root + mulu + '/' + wenjian })
            }
          })
          Data[mulu] = Lst
        }
      })
    }
    console.log(Data)
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
  font-size: 110px;
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
