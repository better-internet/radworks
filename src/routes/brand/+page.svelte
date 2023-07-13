<script>
  import Button from '$lib/components/button/button.svelte';
  import Window from '$lib/components/window/window.svelte';
</script>

<div class="hero" data-theme="dark">
  <h1 class="big">
    The Brand <span class="open">Center</span>
  </h1>
  <p>
    <br />If you need logos, colors, fonts, or illustrations for any of the Radworks brands, you're
    in the right place.
  </p>
</div>

<div class="brand-guides">
  <div class="radworks-brand">
    <Window title="radworks-brand.zip">
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
    <Window title="drips-brand.zip">
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
    <Window title="radicle-brand.zip">
      <img src="/brand/radicle-logo.svg" alt="Radicle logo" />
      <h3>Radicle</h3>
      <p>
        The token logo, colors, fonts, brand assets like our history timeline or organizational
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

  .brand-guides {
    width: 600px;
    display: flex;
    flex-direction: column;
  }

  img {
    pointer-events: none;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 10vw;
    }
  }
</style>
