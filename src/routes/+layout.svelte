<script lang="ts">
  import './styles/fonts.css';
  import './styles/colors.css';
  import './styles/elevation.css';
  import themeStore from '../lib/stores/theme.store';
  import Header from '$lib/components/header/header.svelte';
  import Footer from '$lib/components/footer/footer.svelte';

  const { primaryColor } = themeStore;
</script>

<div class="wrapper" data-theme={$themeStore.currentTheme} data-primary-color={$primaryColor}>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .wrapper {
    background-color: var(--color-background);
    color: var(--color-foreground);
    min-height: 100svh;
  }
</style>
