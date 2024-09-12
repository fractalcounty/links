<script setup lang="ts">
  withDefaults(
    defineProps<{
      name?: string;
      title?: string;
    }>(),
    {
      name: 'title',
      title: '',
    }
  );
</script>

<template>
  <div
    class="h-full w-full flex items-center justify-center"
    :style="{ backgroundImage: 'url(/grain.jpg)' }">
    <div class="flex flex-col items-left justify-center w-full p-16">
      <h1 class="text-7xl font-bold uppercase text-white">
        {{ name }}
      </h1>
      <h2 class="text-5xl font-normal uppercase text-white -mt-2">
        {{ title }}
      </h2>
    </div>
  </div>
</template>
