<script lang="ts">
  import './styles/fonts.css';
  import './styles/colors.css';
  import './styles/elevation.css';
  import themeStore from '../lib/stores/theme.store';
  import Header from '$lib/components/header/header.svelte';
  import Footer from '$lib/components/footer/footer.svelte';
  import { page } from '$app/stores';

  const { primaryColor } = themeStore;
</script>

<svelte:head>
  <title>Radworks</title>
  <meta
    name="description"
    content="Radworks funds new technologies to cultivate internet freedom."
  />
  <meta
    property="og:image"
    content="https://cerulean-cupcake-d1ed95.netlify.app/img/og-share.png"
  />
  <meta property="twitter:title" content="Radworks" />
  <meta
    name="twitter:description"
    content="Radworks funds new technologies to cultivate internet freedom."
  />
  <meta
    property="twitter:image"
    content="https://cerulean-cupcake-d1ed95.netlify.app/img/twitter-share.png"
  />
  <meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="wrapper" data-theme={$themeStore.currentTheme} data-primary-color={$primaryColor}>
  <main>
    <Header />
    <slot />
    <Footer />
  </main>
</div>

<style>
  .wrapper {
    background-color: var(--color-background);
    color: var(--color-foreground);
    min-height: 100svh;
  }

  main {
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
  }
</style>
