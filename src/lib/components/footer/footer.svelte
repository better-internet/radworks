<script>
  import NavLink from '../nav-link/nav-link.svelte';
</script>

<footer>
  <nav>
    <NavLink
      href="https://docs.radworks.org/"
      class="plausible-event-name=FooterDocs"
      target="_blank"
      >Docs
    </NavLink>
    <NavLink href="/brand" class="plausible-event-name=FooterBrand">Brand</NavLink>
    <NavLink href="/legal" class="plausible-event-name=FooterLegal">Legal</NavLink>
    <NavLink href="https://radicle.xyz/" class="plausible-event-name=FooterRadicle" target="_blank"
      >Radicle
    </NavLink>
    <NavLink href="https://drips.network/" class="plausible-event-name=FooterDrips" target="_blank"
      >Drips</NavLink
    >
    <NavLink href="https://x.com/radworks_" class="plausible-event-name=FooterX" target="_blank"
      >X</NavLink
    >
    <NavLink
      href="https://discord.gg/radworks"
      class="plausible-event-name=FooterDiscord"
      target="_blank">Discord</NavLink
    >
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
    gap: 24px;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    nav {
      gap: 16px;
    }
  }
</style>
