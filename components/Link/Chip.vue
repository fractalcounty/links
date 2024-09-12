<template>
  <NuxtLink
    :to="url"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center bg-transparent text-white hover:opacity-80 transition-opacity">
    <Icon :name="iconName" class="text-4xl sm:text-2xl" />
    <span class="sr-only">{{ name }}</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
  defineProps<{
    name: string;
    url: string;
    iconName: string;
  }>();
</script>
