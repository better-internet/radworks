<script>
  import Button from '$lib/components/button/button.svelte';
  import Window from '$lib/components/window/window.svelte';
</script>

<div>
  <div class="hero" data-theme="dark">
    <div>
      <h1 class="big">
        The Brand <span class="open">Center</span>
      </h1>
      <p>
        <br />If you need logos, colors, fonts, or illustrations for any of the Radworks brands,
        you're in the right place.
      </p>

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
          <Window title="drips-brand.zip" class="drips-brand">
            <img src="/brand/drips-logo.svg" alt="Drips logo" />
            <h3>Drips</h3>
            <p>
              The logo, colors, fonts, the manifesto, and other brand assets like illustrations and
              icons.
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
              The token logo, colors, fonts, brand assets like our history timeline or
              organizational diagrams.
            </p>
            <a href="/brand/radicle-brand.zip" target="_blank">
              <Button>Download brand assets</Button>
            </a>
          </Window>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  ::selection {
    background: #ff80ff;
  }

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
    gap: 10%;
    white-space-collapse: break-spaces;
  }

  .radworks-brand {
    grid-column-start: 2;
    grid-row-start: 5;
  }

  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'hero hero'
      'socials socials';
    display: flex;
    grid-area: hero;
    display: flex;
    justify-content: center;
    background-color: var(--color-foreground-level-2);
    padding: 32px;
    color: var(--color-foreground);
    padding-bottom: 256px;
  }

  .hero div {
    /* width: 50%; */
    position: relative;
  }

  .hero div p {
    max-width: 576px;
  }

  .hero p {
    margin: 0 0 32px 0;
  }

  img {
    pointer-events: none;
  }

  @media screen and (min-width: 1920px) {
    .hero {
      border-radius: 0 0 32px 32px;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 10vw;
    }

    .hero {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        'hero'
        'socials';
      justify-content: flex-start;
    }

    .hero div {
      width: 100%;
    }
  }

  @media screen and (max-width: 540px) {
    .hero {
      padding: 16px;
      padding-bottom: 272px;
    }
  }
</style>
