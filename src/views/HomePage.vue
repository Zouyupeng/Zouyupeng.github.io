<script setup>
import HelloWorld from '../components/HelloWorld.vue'

const handleClickMini = () => {
  AMessage.info('hello Oceanknight, click mini AButton!')
}
</script>
<template>
  <div>hello Oceanknight, This is toolsdog home page!</div>
  <a-space>
    <a-button type="primary" size="mini" @click="handleClickMini"
      >Mini</a-button
    >
    <a-button type="primary" size="small">Small</a-button>
    <a-button type="primary">Medium</a-button>
    <a-button type="primary" size="large">Large</a-button>
  </a-space>

  <HelloWorld />
  <icon-mingcute-badge-line class="" />
</template>
<style scoped lang="scss"></style>
