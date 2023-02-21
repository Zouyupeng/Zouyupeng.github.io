<template>
  <a-space>
    <a-button
      type="primary"
      shape="round"
      size="medium"
      status="success"
      @click="increment"
    >
      {{ count }}
    </a-button>
  </a-space>
</template>

<script setup>
const count = ref(0)

function increment() {
  count.value++
}
</script>

<style></style>
