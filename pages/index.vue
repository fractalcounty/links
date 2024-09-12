<script setup lang="ts">
  const { t } = useI18n();

  useHead({
    templateParams: {
      pageTitle: t('title'),
    },
  });

  const siteConfig = useSiteConfig();
</script>

<template>
  <div>
    <h1>{{ siteConfig.name }}</h1>
    <h2>{{ t('title') }}</h2>
  </div>
</template>
