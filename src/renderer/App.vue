<template>
  <div id="app">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'eeds_biyezhao'
}
</script>
<style>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.return {
  position: fixed;
  z-index: 1000;
  left: 15px;
  top: 15px;
}
.return > div {
  position: relative;
}
.return > div:nth-child(1) {
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #18526d;
  text-align: center;
  border: 2px white solid;
  color: white;
}
.return i {
  font-size: 30px;
  line-height: 40px;
}
.wapper {
  width: 100%;
  height: 100%;
  background-size: cover !important;
  overflow: hidden;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
