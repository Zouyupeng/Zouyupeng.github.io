<script setup>
import { getConfig } from '@/config/config.js'
const openNewWindow = () => window.open(getConfig('me.projectGitHub'), '_blank')
</script>
<template>
  <a-button type="text" @click="openNewWindow">
    <template #icon>
      <icon-mdi-github class="text-[var(--color-text-1)] text-16px" />
    </template>
  </a-button>
</template>
