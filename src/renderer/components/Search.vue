<template>
  <div class="wrapper">
    <div class="return"
         @click="go_index"></div>
    <div class="pic"
         v-viewer="{movable: true}">
      <img :src="src"
           alt="">
    </div>
    <div class="select">
      <el-select v-model="selectYear"
                 placeholder="请选择年份"
                 @change="Yearchanges">
        <el-option v-for="item in YearLst"
                   :key="item"
                   :label="item"
                   :value="item">
        </el-option>
      </el-select>
      <el-select v-model="selectClass"
                 placeholder="请选择班级">
        <el-option v-for="item in ClassLst"
                   :key="item"
                   :label="item"
                   :value="item">
        </el-option>
      </el-select>
      <el-button type="warning"
                 round
                 @click="showClick">搜索毕业照</el-button>
    </div>

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
  name: 'search',
  data () {
    return {
      YearLst: [],
      selectYear: null,
      ClassData: {},
      ClassLst: [],
      Data: {},
      selectClass: null,
      src: require('../assets/default.jpg')
    }
  },
  methods: {
    go_index () {
      let audio = document.createElement('audio')
      audio.src = 'static/click.wav'
      audio.play()
      this.$router.push({ name: 'index' })
    },
    Yearchanges (year) {
      this.ClassLst = this.Data[year]
      this.selectClass = null
    },
    showClick () {
      if (this.selectYear == null) {
        this.$message({
          message: '出错了哦，请选择届别',
          type: 'error'
        });
      } else {
        if (this.selectClass == null) {
          this.$message({
            message: '出错了哦，请选择班级',
            type: 'error'
          });
        }
        else {
          console.log(this.ClassData[this.selectClass])
          this.src = this.ClassData[this.selectClass].src
        }
      }
      let audio = document.createElement('audio')
      audio.src = 'static/click.wav'
      audio.play()
    }
  },
  mounted () {
    var Data = {}
    var ClassData = {}
    var YearLst = []
    var path = require('path')
    var root =
      path
        .dirname(process.execPath)
        .split('\\')
        .join('/') + '/Data/'
    if (fs.existsSync(root)) {
      fs.readdirSync(root).forEach(function (mulu) {
        if (fs.statSync(root + mulu).isDirectory()) {
          var allFile = []
          fs.readdirSync(root + mulu).forEach(function (wenjian) {
            if (
              fs.statSync(root + mulu + '/' + wenjian).isFile() &&
              extnames.indexOf(path.extname(wenjian)) >= 0
            ) {
              allFile.push(wenjian.substring(0, wenjian.lastIndexOf('.')))
              ClassData[wenjian.substring(0, wenjian.lastIndexOf('.'))] = { name: wenjian.substring(0, wenjian.lastIndexOf('.')), filename: wenjian, src: root + mulu + '/' + wenjian }
            }
          })
          Data[mulu] = allFile
          YearLst.push(mulu)
        }
      })
    }
    this.YearLst = YearLst
    this.Data = Data
    this.ClassData = ClassData
  }
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
.pic {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pic > img {
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0 0 8px black;
  border-radius: 5px;
}
.select {
  position: absolute;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background: rgba(128, 128, 128, 0.24);
  box-shadow: 0 0 10px black;
  height: 100px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
