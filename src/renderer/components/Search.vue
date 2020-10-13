<template>
  <div class="wrapper">
    <div class="btn_back" @click="go_index">back</div>
    <div class="content">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {}
  },
  methods: {
    go_index() {
      this.$router.push({ name: 'index' })
    }
  },
  mounted() {}
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
