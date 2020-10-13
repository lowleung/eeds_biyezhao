<template>
  <div class="wrapper">
    <div class="return"
         @click="go_index"></div>
    <GeminiScrollbar style="height:100% "
                     class="scroll">
      <div class="my-container">
        <div class="my-item"
             v-for="(item, index) in items"
             :key="item.tag + index">
          <div class="symbol"></div>
          <div class="my-title">
            <span>{{ item.tag }}</span>
          </div>
          <el-scrollbar style="margin-bottom:0px"
                        :style="{ height: getHeight - 240 + 'px' }">
            <div class="my-list" v-viewer="{movable: true}">
              <div class="my-img"
                   v-for="src in item.content"
                   :key="src.path">
                <img :src="src.path" />
                <span>{{ src.name }}</span>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </GeminiScrollbar>
  </div>

</template>

<script>
import Timeline from './Timeline.vue'
import Star from './star'
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
  name: 'list',
  components: { Timeline, Star },
  data () {
    return {
      items: []
    }
  },
  methods: {
    go_index () {
      let audio = document.createElement('audio')
      audio.src = 'static/click.wav'
      audio.play()
      this.$router.push({ name: 'index' })
    }
  },
  mounted () {
    var path = require('path')
    var root = path.dirname(process.execPath) + '\\Data\\'
    var list = []
    if (fs.existsSync(root)) {
      var fa = fs.readdirSync(root)
      fa.forEach(function (ele) {
        var info = fs.statSync(root + ele)
        if (info.isDirectory) {
          var son = fs.readdirSync(root + ele)
          var files = []
          son.forEach(function (file) {
            if (extnames.indexOf(path.extname(file)) >= 0) {
              // files.push(root + ele + '\\' + file)
              files.push({
                path: root + ele + '\\' + file,
                name: file.substring(0, file.lastIndexOf('.'))
              })
            }
          })
          list.push({
            tag: ele ,
            content: files
          })
        }
      })
      this.items = list
    }
  },
  computed: {
    getWidth() {
      return document.body.clientWidth
    },
    getHeight() {
      return document.body.clientHeight
    },
    imgHeight() {
      return this.$refs.img ? this.$refs.img.offsetHeight + 'px' : '100%'
    }
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.return {
  position: absolute;
  background: url('../assets/back.png');
  background-size: cover;
  width: 60px;
  height: 60px;
  top: 10px;
  left: 10px;
}
.my-container {
  height: calc(100%-200px);
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  /* border-top: 5px gold solid; */
  margin-top: 100px;
}
.my-item {
  border-bottom: 5px gold solid;
  float: left;
  display: block;
  padding: 0 20px 40px 20px;
}
.my-title {
  position: absolute;
  width: 330px;
  top: 1010px;
  font-size: 36px !important;
  color: black !important;
  font-family: hyzy;
  text-align: center;
}
.symbol {
  position: absolute;
  top: 974px;
  display: inline-block;
  width: 8px;
  height: 8px;
  border: 4px #18526d solid;
  background: white;
  border-radius: 50%;
  align-self: center;
}
.my-item .my-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  min-height: 840px;
}
.my-item .my-img {
  width: 300px;
}
.my-item .my-img > img {
  width: 290px;
  height: auto;
  display: block;
  border: 5px #953c2c solid;
  box-shadow: 0 0 5px black;
  border-radius: 5px;
}
.my-item .my-img > span {
  /* width: 100%; */
  margin-left: 5px;
  margin-right: 5px;
  display: block;
  /* position: absolute; */
  background: rgba(0, 0, 0, 0.5);
  transform: translateY(-27px);
  color: white;
  font-size: 20px;
  text-align: center;
}
</style>
