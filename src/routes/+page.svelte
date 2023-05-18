<script>
  import Button from '$lib/components/button/button.svelte';
  import PixelPen from '$lib/components/illustrations/pixel-pen.svelte';
</script>

<div class="home">
  <div class="hero" data-theme="dark">
    <div>
      <p class="big">
        We fund <span class="open">new technologies</span> to
        <span class="open">cultivate internet freedom</span>.
      </p>
      <Button>Learn more</Button>
      <div class="pen-illustration"><PixelPen /></div>
    </div>
  </div>
</div>

<style>
  .home {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'hero hero';
  }

  .hero {
    display: flex;
    grid-area: hero;
    display: flex;
    justify-content: flex-end;
    background-color: var(--color-background);
    padding: 32px;
    color: var(--color-foreground);
  }

  .hero div {
    width: 50%;
    position: relative;
  }

  .hero div p {
    max-width: 576px;
  }

  .hero .pen-illustration {
    height: 32px;
    position: absolute;
    bottom: 8px;
    left: -84px;
    pointer-events: none;
  }
</style>
