<template>
  <a-space>
    <a-button v-bind="attr" @click="increment">
      {{ count }}
    </a-button>
    <a-button @click="changeRed"> 按钮变红 </a-button>
  </a-space>
</template>

<script setup>
const count = ref(0)

var attr = ref({
  type: 'primary',
  shape: 'round',
  size: 'large',
  status: 'success'
})

function increment() {
  count.value++
}

function changeRed() {
  attr.value.status = 'danger'
}
</script>

<style></style>
