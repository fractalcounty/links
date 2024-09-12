<script setup lang="ts">
  const { t } = useI18n();
  const siteConfig = useSiteConfig();

  useHead({
    templateParams: {
      pageTitle: t('title'),
    },
  });

  defineOgImageComponent('MainOG', {
    name: siteConfig.name,
    title: t('title'),
  });
</script>

<template>
  <div>
    <h1>{{ siteConfig.name }}</h1>
    <h2>{{ t('title') }}</h2>
  </div>
</template>
