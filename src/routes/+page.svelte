<script>
  import Button from '$lib/components/button/button.svelte';
  import DiscordIcon from '$lib/components/illustrations/discord-icon.svelte';
  import PixelPen from '$lib/components/illustrations/pixel-pen.svelte';
  import TwitterIcon from '$lib/components/illustrations/twitter-icon.svelte';
  import Window from '$lib/components/window/window.svelte';
</script>

<div>
  <div class="hero" data-theme="dark">
    <div>
      <p class="big">
        We fund <span class="open">new technologies</span> to cultivate
        <span class="open">internet freedom</span>.
      </p>
      <Button>Learn more</Button>
      <div class="pen-illustration"><PixelPen /></div>
    </div>
  </div>
  <div class="social-windows">
    <Window icon={DiscordIcon} title="Discord">
      <div class="chat">
        <p class="chat-message incoming" data-theme="dark">Let’s chat on Discord!</p>
        <img class="outgoing" src="/keyboard-kid.png" alt="kid smashing keyboard" />
        <p class="chat-message outgoing" data-theme="dark">Waddap</p>
      </div>
      <Button>Check out the Discord</Button>
    </Window>
    <Window icon={TwitterIcon} title="Twitter">
      <div class="twitter">
        <p>Keep up with our tweets</p>
        <Button>Follow us on Twitter</Button>
      </div>
    </Window>
    <img class="dove" src="/dove.png" alt="dove" />
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

<style>
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'hero hero'
      'socials socials';
  }

  .hero {
    display: flex;
    grid-area: hero;
    display: flex;
    justify-content: flex-end;
    background-color: var(--color-foreground-level-2);
    padding: 32px;
    color: var(--color-foreground);
    padding-bottom: 256px;
    margin-bottom: -256px;
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
  .social-windows {
    display: flex;
    justify-content: flex-end;
    grid-area: socials;
    gap: 10%;
    padding: 98px 10% 0 0;
    align-items: center;
    position: relative;
  }

  .social-windows p {
    margin: 0 0 16px 0;
  }

  .chat-message {
    width: fit-content;
  }

  .chat-message.incoming {
    background-color: var(--color-primary);
    color: var(--color-foreground);
    padding: 8px 16px;
    border-radius: 24px 24px 24px 4px;
  }

  .chat-message.outgoing {
    background-color: var(--color-foreground-level-5);
    color: var(--color-foreground);
    padding: 8px 16px;
    align-self: flex-end;
    border-radius: 24px 24px 4px 24px;
  }

  .chat {
    display: flex;
    gap: 8px;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .chat p {
    margin: 0;
  }

  img {
    pointer-events: none;
  }

  .chat img.outgoing {
    align-self: flex-end;
    max-width: 180px;
  }

  .social-windows .twitter {
    padding-right: 32px;
  }

  .social-windows .dove {
    max-height: 240px;
    right: 72px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .hero p {
    margin: 0 0 32px 0;
  }
</style>
