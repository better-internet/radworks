<script>
  import NavLink from '../nav-link/nav-link.svelte';
</script>

<footer>
  <nav>
    <NavLink href="https://docs.radworks.org/" target="_blank">Docs</NavLink>
    <NavLink href="https://radicle.xyz/" target="_blank">Radicle</NavLink>
    <NavLink href="https://drips.network/" target="_blank">Drips</NavLink>
    <NavLink href="https://twitter.com/radworks_" target="_blank">Twitter</NavLink>
    <NavLink href="https://discord.gg/radicle" target="_blank">Discord</NavLink>
  </nav>
</footer>

<style>
  footer {
    color: var(--color-background);
    padding: 32px;
    display: flex;
    justify-content: center;
    background-color: var(--color-foreground-level-2);
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 32px;
    row-gap: 12px;
    align-items: center;
  }
</style>
