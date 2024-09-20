<script lang="ts" setup>
  import { shallowRef, ref, watch } from 'vue';

  const yRotation = shallowRef(0);
  const progress = ref(0);
  const cameraRotation = ref([0.7, 0, 0]);

  useRenderLoop().onLoop(({ delta }) => {
    yRotation.value += 0.015 * delta;
  });

  // Watch the progress and update the camera rotation
  watch(progress, (newProgress) => {
    // Adjust the x-rotation to pan down, max rotation of -0.5 radians
    cameraRotation.value = [0.7 * (1 - newProgress), 0, 0];
  });
</script>

<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera
      :position="[0, 0, 0]"
      :rotation="cameraRotation"
      :fov="75" />
    <CameraControls v-bind="controlsState" make-default />
    <Suspense>
      <Levioso speed="4" floatFactor="0.2" rotationFactor="0.1">
        <AnimatedSprite
          :image="`/braphog.png`"
          :atlas="1"
          :fps="1"
          :loop="true"
          :position="[0, -6, -50]"
          :scale="3" />
      </Levioso>
    </Suspense>
    <Stars
      :rotation="[-yRotation, 0, 0]"
      :radius="50"
      :depth="50"
      :count="3000"
      :size="0.1"
      :size-attenuation="true" />
    <Suspense>
      <Ocean :position="[0, -10, 0]" />
    </Suspense>
    <ScrollControls
      v-model="progress"
      html-scroll
      :distance="0"
      :smooth-scroll="0.05" />
    <TresGridHelper :args="[10, 10]" :position="[0, 0, 0]" />
    <TresGridHelper :args="[10, 10]" :position="[0, -10, 0]" />
    <KeyboardControls />
  </TresCanvas>
</template>
