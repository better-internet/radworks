<script>
  import Button from '$lib/components/button/button.svelte';
  import Floater from '$lib/components/floater/floater.svelte';
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
  <Floater imgUrl="./img/discord.svg" title="Discord" btnTxt="Check out the Discord">
    <div class="discord">
      <p>Let’s chat on Discord!</p>
      <img src="./img/baby-keyboard-smash.gif" alt="" />
      <p>waddap</p>
    </div>
  </Floater>
  <Floater imgUrl="./img/twitter.svg" title="Twitter" btnTxt="Follow us on Twitter">
    <div class="twitter">
      <p>Keep up with our tweets</p>
    </div>
  </Floater>
  <div class="projects" data-theme="dark">
    <h1>Projects</h1>
    <div class="projects-container">
      <div class="project">
        <h2>
          Radicle
          <Button on:click={() => console.log('https://radicle.xyz')}>Check out Radicle</Button>
        </h2>
        <p class="subheader">A p2p network for code collaboration.</p>
        <img class="project-image" src="./img/rad@2x.png" alt="" />
      </div>
      <div class="project drips">
        <h2>
          Drips
          <Button on:click={() => console.log('https://www.drips.network')}>Check out Drips</Button>
        </h2>
        <p class="subheader">A toolkit for automatic, recurring payments.</p>
        <img class="project-image" src="./img/drips@2x.png" alt="" />
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

  .discord {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 8px;
    margin: 32px;
  }

  .discord p {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    margin: 0;
    background-color: var(--color-primary);
    border-radius: 24px 24px 24px 4px;

    font-family: 'Terminal Grotesque';
    color: var(--color-background);
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    font-feature-settings: 'ss02' on, 'ss01' on;
    width: fit-content;
  }

  .discord p:last-child {
    background-color: var(--color-foreground-level-5);
  }

  .discord img {
    border-radius: 24px 24px 4px 24px;
    width: 180px;
  }

  .twitter {
    margin: 24px 32px;
  }

  .twitter p {
    font-family: 'Terminal Grotesque';
    color: var(--color-background);
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    font-feature-settings: 'ss02' on, 'ss01' on;
    width: fit-content;
    margin: 0;
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

  .drips {
    margin-top: 198px;
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
