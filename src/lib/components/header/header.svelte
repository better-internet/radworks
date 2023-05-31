<script>
  import Logo from '../illustrations/logo.svelte';
  import NavLink from '../nav-link/nav-link.svelte';
</script>

<header data-theme="dark">
  <div class="logo">
    <div class="icon"><Logo /></div>
    <span class="wordmark">rad<span class="open">works</span></span>
  </div>
  <nav>
    <NavLink href="#">About</NavLink>
    <NavLink href="#projects">Projects</NavLink>
    <NavLink href="#">Blog</NavLink>
    <NavLink href="https://twitter.com/radworks_" target="_blank">Twitter</NavLink>
    <NavLink href="https://discord.gg/radicle" target="_blank">Discord</NavLink>
  </nav>
</header>

<style>
  header {
    color: var(--color-foreground);
    background-color: var(--color-foreground-level-2);
    padding: 32px;
    display: flex;
  }

  header > * {
    flex: 1;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo .icon {
    height: 56px;
    width: 56px;
  }

  .logo .wordmark {
    font-family: 'Terminal Grotesque';
    font-style: normal;
    font-weight: 400;
    font-size: 54.4018px;
    line-height: 54px;
    leading-trim: both;
    text-edge: cap;
  }

  nav {
    display: flex;
    column-gap: 32px;
    row-gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 800px) {
    header {
      flex-direction: column;
      gap: 24px;
    }
  }
</style>
