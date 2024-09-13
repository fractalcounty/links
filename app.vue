<script setup lang="ts">
  useHead({
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    ],
    meta: [
      { name: 'theme-color', content: '#ffffff' }, // Adjust color as needed
    ],
  });
</script>

<template>
  <NuxtPage />
</template>
