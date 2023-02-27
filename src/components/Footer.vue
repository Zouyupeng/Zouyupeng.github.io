<script setup>
import { getConfig } from '@/config/config.js'
</script>
<template>
  <div class="w-1200px flex justify-between items-center min-h-48px">
    <div class="w-full h-48px flex justify-center items-center">
      <a-trigger
        position="top"
        auto-fit-position
        :unmount-on-close="false"
        :popup-offset="10"
        :show-arrow="true"
      >
      </a-trigger>
      <span> Copyright ⓒ 2023</span>
      <a-link :href="getConfig('me.github')" target="_blank">
        {{ getConfig('me.name') }}
      </a-link>
    </div>
  </div>
</template>
