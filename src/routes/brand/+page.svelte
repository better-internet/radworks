<script>
  import Button from '$lib/components/button/button.svelte';
  import Window from '$lib/components/window/window.svelte';
</script>

<div class="hero" data-theme="dark">
  <div>
    <h1 class="big">
      The Brand <span class="open">Center</span>
    </h1>
    <p>
      <br />If you need logos, colors, fonts, or illustrations for any of the Radworks brands,
      you're in the right place.
    </p>
  </div>
</div>

<div class="brand-guides">
  <div class="radworks-brand">
    <Window maxWidth={500} title="radworks-brand.zip">
      <img src="/brand/radworks-logo.svg" alt="Radworks logo" />
      <h3>Radworks</h3>
      <p>
        The token logo, colors, fonts, and other brand assets like our history timeline or
        organizational diagrams.
      </p>
      <a href="/brand/radworks-brand.zip" target="_blank">
        <Button>Download brand assets</Button>
      </a>
    </Window>
  </div>
  <div class="drips-brand">
    <Window maxWidth={600} title="drips-brand.zip">
      <img src="/brand/drips-logo.svg" alt="Drips logo" />
      <h3>Drips</h3>
      <p>
        The logo, colors, fonts, the manifesto, and other brand assets like illustrations and icons.
      </p>
      <a href="/brand/drips-brand.zip" target="_blank">
        <Button>Download brand assets</Button>
      </a>
    </Window>
  </div>
  <div class="radicle-brand">
    <Window maxWidth={500} title="radicle-brand.zip">
      <img src="/brand/radicle-logo.svg" alt="Radicle logo" />
      <h3>Radicle</h3>
      <p>
        The space invader, logotype, colors, fonts, and other brand assets like ASCII informational
        diagrams.
      </p>
      <a href="/brand/radicle-brand.zip" target="_blank">
        <Button>Download brand assets</Button>
      </a>
    </Window>
  </div>
</div>

<style>
  h1 {
    font-family: Terminal Grotesque Open;
    font-size: 76px;
    font-weight: 400;
    line-height: 62px;
    margin: 0;
    color: var(--color-primary);
  }

  h3 {
    font-family: 'Terminal Grotesque';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    font-feature-settings: 'ss02' on, 'ss01' on;
    margin: 0;
  }

  .hero {
    background-color: var(--color-foreground-level-2);
    color: var(--color-foreground);
    padding: 24px 24px 128px 24px;
    display: flex;
    justify-content: flex-end;
  }

  .hero div {
    width: 50%;
  }

  .brand-guides {
    display: flex;
    flex-direction: column;
    margin-top: -64px;
    padding: 24px;
    padding-bottom: 64px;
    gap: 24px;
  }

  img {
    pointer-events: none;
  }

  .radworks-brand,
  .drips-brand,
  .radicle-brand {
    display: flex;
  }

  .radworks-brand {
    padding-left: 5vw;
  }

  .drips-brand {
    padding-left: 50vw;
    padding-right: 24px;
  }

  .radicle-brand {
    padding-left: 10vw;
  }

  @media screen and (max-width: 800px) {
    .hero div {
      width: 100%;
    }

    h1 {
      font-size: 10vw;
    }

    .radworks-brand,
    .drips-brand,
    .radicle-brand {
      padding: 0;
    }

    .brand-guides {
      padding: 0;
    }
  }
</style>
