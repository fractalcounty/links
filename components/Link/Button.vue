<template>
  <NuxtLink
    :to="destination"
    class="btn btn-lg sm:btn-md btn-outline btn-wide font-normal">
    {{ label }}
  </NuxtLink>
</template>

<script lang="ts" setup>
  defineProps<{
    destination: string;
    label: string;
  }>();
</script>
