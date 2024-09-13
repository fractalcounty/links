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
  <main
    class="min-h-[200vh] h-screen flex flex-col items-center justify-center text-center">
    <SpaceScene />

    <header class="z-10">
      <h1
        class="text-5xl sm:text-3xl gap-x-2 font-extrabold flex flex-wrap justify-center px-24">
        <span class="animate-fractal">FRACTAL</span>
        <span class="animate-county">COUNTY</span>
      </h1>
      <h2 class="text-xl sm:text-lg uppercase animate-title">
        {{ t('title') }}
      </h2>
    </header>

    <nav class="my-6 z-10">
      <ul class="flex flex-col gap-4 uppercase">
        <li>
          <LinkButton
            destination="https://www.youtube.com/@fractalcounty"
            label="YouTube" />
        </li>
        <li>
          <LinkButton
            destination="https://laramieonline.bandcamp.com"
            label="Bandcamp" />
        </li>
        <li>
          <LinkButton
            destination="https://fractalcounty.newgrounds.com"
            label="Newgrounds" />
        </li>
        <li>
          <LinkButton
            destination="https://www.youtube.com/@fractalcountyarchives"
            label="Archives" />
        </li>
      </ul>
    </nav>

    <nav class="z-10">
      <ul class="flex gap-8">
        <li>
          <LinkChip
            name="Twitter"
            url="https://x.com/fractalcounty"
            icon-name="ri:twitter-line" />
        </li>
        <li>
          <LinkChip
            name="Bluesky"
            url="https://bsky.app/profile/fractalcounty.com"
            icon-name="ri:bluesky-line" />
        </li>
        <li>
          <LinkChip
            name="Instagram"
            url="https://www.instagram.com/fractalcounty/"
            icon-name="ri:instagram-line" />
        </li>
        <li>
          <LinkChip
            name="GitHub"
            url="https://github.com/fractalcounty"
            icon-name="ri:github-line" />
        </li>
      </ul>
    </nav>
  </main>
</template>

<style>
  :root {
    font-family: 'Alte Haas Grotesk', 'M PLUS Rounded 1c', 'Helvetica', 'Inter',
      sans-serif;
  }
  .btn {
    transition-duration: 0.15s !important;
  }

  main {
    padding-bottom: 100vh;
  }

  @keyframes wiggle {
    0%,
    100% {
      transform: translateY(var(--ty-start)) scale(var(--scale-start))
        rotate(var(--rotate-start));
    }
    50% {
      transform: translateY(var(--ty-mid)) scale(var(--scale-mid))
        rotate(var(--rotate-mid));
    }
  }

  @keyframes wiggle-title {
    0%,
    100% {
      transform: translateY(0) scale(0.98) rotate(0.3deg);
    }
    25% {
      transform: translateY(-1.3px) scale(0.985) rotate(-0.4deg);
    }
    50% {
      transform: translateY(0) scale(0.97) rotate(-0.3deg);
    }
    75% {
      transform: translateY(1.2px) scale(0.99) rotate(0.4deg);
    }
  }

  .animate-fractal,
  .animate-county,
  .animate-title {
    display: inline-block;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .animate-fractal {
    --ty-start: 1px;
    --ty-mid: -1px;
    --scale-start: 1.005;
    --scale-mid: 0.99;
    --rotate-start: -0.3deg;
    --rotate-mid: 0.2deg;
    animation: wiggle 6s infinite;
  }

  .animate-county {
    --ty-start: 2px;
    --ty-mid: -1.5px;
    --scale-start: 1.005;
    --scale-mid: 0.98;
    --rotate-start: 0.4deg;
    --rotate-mid: -0.2deg;
    animation: wiggle 7s infinite;
  }

  .animate-title {
    animation: wiggle-title 5s infinite;
  }
</style>
