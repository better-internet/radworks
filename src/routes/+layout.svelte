<script lang="ts">
  import './styles/colors.css';
  import themeStore from '../lib/stores/theme.store';

  const { primaryColor } = themeStore;
</script>

<main data-theme={$themeStore.currentTheme} data-primary-color={$primaryColor}>
  <slot />
</main>

<style>
  main {
    background-color: var(--color-background);
    color: var(--color-foreground);
  }
</style>
