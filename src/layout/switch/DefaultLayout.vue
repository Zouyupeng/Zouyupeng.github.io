<script setup></script>

<template>
  <div>
    DefaultLayout
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style scoped></style>
