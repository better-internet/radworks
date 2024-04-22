<script lang="ts">
  import './styles/fonts.css';
  import './styles/colors.css';
  import './styles/elevation.css';
  import themeStore from '../lib/stores/theme.store';
  import Header from '$lib/components/header/header.svelte';
  import Footer from '$lib/components/footer/footer.svelte';

  const { primaryColor } = themeStore;
</script>

<svelte:head>
  <title>Radworks</title>
  <meta
    name="description"
    content="Radworks enables developers to securely host, collaborate on, and reward open-source code."
  />
  <meta property="og:image" content="https://radworks.org/img/og-share.png" />
  <meta property="twitter:title" content="Radworks" />
  <meta
    property="twitter:description"
    content="Radworks enables developers to securely host, collaborate on, and reward open-source code."
  />
  <meta property="twitter:image" content="https://radworks.org/img/twitter-share.png" />
  <meta property="twitter:card" content="summary_large_image" />
  <script
    defer
    data-domain="radworks.org"
    src="https://plausible.io/js/script.tagged-events.js"
  ></script>
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
