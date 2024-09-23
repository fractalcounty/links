<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';

  const props = defineProps<{
    progress: number;
  }>();

  const audioContext = ref<AudioContext | null>(null);
  const audioBuffer = ref<AudioBuffer | null>(null);
  const audioSource = ref<AudioBufferSourceNode | null>(null);
  const audioGain = ref<GainNode | null>(null);
  const audioInitialized = ref(false);

  const initializeAudio = async () => {
    if (audioInitialized.value) return;

    audioContext.value = new AudioContext();
    audioGain.value = audioContext.value.createGain();
    audioGain.value.connect(audioContext.value.destination);
    audioGain.value.gain.setValueAtTime(0, audioContext.value.currentTime);

    try {
      const response = await fetch('/ocean.ogg');
      const arrayBuffer = await response.arrayBuffer();
      audioBuffer.value = await audioContext.value.decodeAudioData(arrayBuffer);
      audioInitialized.value = true;
    } catch (error) {
      console.error('Error initializing audio:', error);
    }
  };

  const playAudio = () => {
    if (!audioContext.value || !audioBuffer.value || !audioGain.value) return;

    if (audioContext.value.state === 'suspended') {
      audioContext.value.resume();
    }

    if (audioSource.value) {
      audioSource.value.stop();
    }

    audioSource.value = audioContext.value.createBufferSource();
    audioSource.value.buffer = audioBuffer.value;
    audioSource.value.loop = true;
    audioSource.value.connect(audioGain.value);
    audioSource.value.start();
  };

  watch(
    () => props.progress,
    async (newValue) => {
      if (!audioInitialized.value) {
        await initializeAudio();
      }

      if (audioContext.value && audioGain.value) {
        if (newValue > 0 && audioContext.value.state === 'suspended') {
          playAudio();
        }

        const volume = Math.min(newValue * 2, 1); // Ramp up volume faster
        audioGain.value.gain.setTargetAtTime(
          volume,
          audioContext.value.currentTime,
          0.1
        );
      }
    }
  );

  onMounted(() => {
    initializeAudio();
  });

  defineExpose({ initializeAudio });
</script>

<template>
  <div />
</template>
