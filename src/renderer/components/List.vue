<template>
  <div @click="go_index">back</div>
</template>

<script>
export default {
  name: 'list',
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

<style scoped></style>
