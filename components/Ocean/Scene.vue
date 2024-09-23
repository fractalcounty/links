<script setup lang="ts">
  import { Euler } from 'three';

  const yRotation = shallowRef(0);
  const progress = ref(0);

  useRenderLoop().onLoop(({ delta }) => {
    yRotation.value += 0.015 * delta;
  });

  const cameraRotation = computed(() => {
    const startRotation = 0.7;
    const endRotation = -0.0;
    return new Euler(
      startRotation + (endRotation - startRotation) * progress.value,
      0,
      0
    );
  });
</script>

<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera
      :position="[0, 20, 0]"
      :rotation="cameraRotation"
      :fov="75" />
    <Stars
      :rotation="[-yRotation, 0, 0]"
      :radius="50"
      :depth="50"
      :count="3000"
      :size="0.1"
      :size-attenuation="true" />
    <Suspense>
      <Ocean :position="[0, 10, 0]" :distortion-scale="3.5" />
    </Suspense>

    <Suspense>
      <Levioso speed="4" float-factor="0.2" rotation-factor="0.1">
        <AnimatedSprite
          :image="`/braphog.png`"
          :flip-x="false"
          :as-sprite="false"
          :atlas="1"
          :fps="1"
          :loop="true"
          :position="[0, 13.5, -50]"
          :scale="[3, 3, 3]" />
      </Levioso>
    </Suspense>
    <ScrollControls
      v-model="progress"
      html-scroll
      :distance="1"
      :smooth-scroll="0.05" />
  </TresCanvas>
</template>
