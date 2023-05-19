<script>
  import Button from '$lib/components/button/button.svelte';
  import PixelPen from '$lib/components/illustrations/pixel-pen.svelte';
</script>

<div>
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
  <div class="projects" data-theme="dark">
    <h1>Projects</h1>
    <div class="projects-container">
      <div class="project">
        <h2>
          Radicle
          <Button on:click={() => console.log('https://radicle.xyz')}>Check out Radicle</Button>
        </h2>
        <p class="subheader">A p2p network for code collaboration.</p>
        <img class="project-image" src="./img/social-share.png" alt="" />
      </div>
      <div class="project">
        <h2>
          Drips
          <Button on:click={() => console.log('https://www.drips.network')}>Check out Drips</Button>
        </h2>
        <p class="subheader">A toolkit for automatic, recurring payments.</p>
        <img class="project-image" src="./img/social-share.png" alt="" />
      </div>
    </div>
  </div>
</div>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
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

  .projects {
    background-color: var(--color-foreground);
    padding: 32px;
  }

  .projects-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .projects h1 {
    font-family: Terminal Grotesque Open;
    font-size: 76px;
    font-weight: 400;
    line-height: 62px;
    margin: 0;
    color: var(--color-primary);
  }

  .project h2 {
    font-family: Terminal Grotesque;
    font-size: 112px;
    font-weight: 400;
    color: var(--color-background);
    display: flex;
    margin: 64px 0 32px;
    height: 70px;
    align-items: center;
    gap: 24px;
    padding-left: 24px;
  }

  .project p.subheader {
    display: flex;
    align-items: center;
    padding: 6px 24px;
    height: 36px;
    width: -webkit-fit-content;
    width: fit-content;

    /* Greys (Light)/background */
    color: var(--color-background);
    background: var(--color-foreground);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.25);
    border-radius: 60px;
  }

  .project-image {
    filter: drop-shadow(24px 20px 68px rgba(0, 0, 0, 0.25));
    border-radius: 4px 4px 24px 24px;
    object-fit: 'contain';
    width: 100%;
  }
</style>
