<script>
  import NavLink from '../nav-link/nav-link.svelte';
</script>

<footer>
  <nav>
    <NavLink href="#">Docs</NavLink>
    <NavLink href="#">Radicle</NavLink>
    <NavLink href="#">Drips</NavLink>
    <NavLink href="#">Twitter</NavLink>
    <NavLink href="#">Discord</NavLink>
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
