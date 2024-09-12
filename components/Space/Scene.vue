<script lang="ts" setup>
  import { shallowRef } from 'vue';

  const yRotation = shallowRef(0);

  useRenderLoop().onLoop(({ delta }) => {
    yRotation.value += 0.015 * delta;
  });
</script>

<template>
  <TresCanvas window-size>
    <Stars
      :rotation="[-yRotation, 0, 0]"
      :radius="50"
      :depth="50"
      :count="3000"
      :size="0.1"
      :size-attenuation="true" />
    <TresPerspectiveCamera
      :position="[0, 20, 0]"
      :rotation="[0.9, 0, 0]"
      :fov="75" />
  </TresCanvas>
</template>
