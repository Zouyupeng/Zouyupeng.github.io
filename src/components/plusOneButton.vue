<template>
  <a-space>
    <a-button type="primary" @click="increment">{{ state.count }}</a-button>
  </a-space>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<style></style>
