<script>
  import Logo from '../illustrations/logo.svelte';
  import NavLink from '../nav-link/nav-link.svelte';
</script>

<header data-theme="dark">
  <a href="/" class="logo">
    <div class="icon"><Logo /></div>
    <span class="wordmark">rad<span class="open">works</span></span>
  </a>
  <nav>
    <NavLink href="https://docs.radworks.org/" target="_blank" class="plausible-event-name=NavDocs"
      >About</NavLink
    >
    <NavLink
      href="https://radworks.mirror.xyz"
      target="_blank"
      class="plausible-event-name=NavBlogMirror">Blog</NavLink
    >
    <NavLink href="https://x.com/radworks_" target="_blank" class="plausible-event-name=NavXTwitter"
      >X</NavLink
    >
    <NavLink
      href="https://discord.gg/radworks"
      target="_blank"
      class="plausible-event-name=NavDiscord">Discord</NavLink
    >
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
    text-decoration: none;
    color: var(--color-foreground);
    -webkit-tap-highlight-color: transparent;
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
    gap: 32px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: end;
  }

  @media screen and (max-width: 540px) {
    header {
      padding: 16px;
    }
  }

  @media screen and (max-width: 800px) {
    .logo {
      justify-content: center;
    }

    header {
      flex-direction: column;
      gap: 16px;
    }

    nav {
      gap: 16px;
      justify-content: center;
    }
  }
</style>
