<script>
  import Button from '$lib/components/button/button.svelte';
  import DiscordIcon from '$lib/components/illustrations/discord-icon.svelte';
  import ForumIllustration from '$lib/components/illustrations/forum-illustration.svelte';
  import PixelPen from '$lib/components/illustrations/pixel-pen.svelte';
  import JobsIcon from '$lib/components/illustrations/jobs-icon.svelte';
  import TwitterIcon from '$lib/components/illustrations/twitter-icon.svelte';
  import Window from '$lib/components/window/window.svelte';
</script>

<svelte:head>
  <title>Radworks</title>
  <meta
    name="description"
    content="Radworks funds new technologies to cultivate internet freedom."
  />
</svelte:head>

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
        <img class="outgoing chat-message" src="img/keyboard-kid.gif" alt="kid smashing keyboard" />
        <p class="chat-message outgoing" data-theme="dark">Waddap</p>
      </div>
      <Button>Check out the Discord</Button>
    </Window>
    <Window icon={TwitterIcon} title="Twitter">
      <img class="dove" src="img/flying-dove.gif" alt="flying dove gif" />
      <div class="twitter">
        <p>Keep up with our tweets</p>
        <Button>Follow us on Twitter</Button>
      </div>
    </Window>
  </div>
  <div class="projects">
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
  <div class="resources">
    <h1>Resources</h1>
    <div class="resources-container">
      <div class="forum">
        <Window>
          <div class="forum-image">
            <ForumIllustration />
          </div>
          <h3>Hash out ideas</h3>
          <Button>Visit Snapshot</Button>
        </Window>
      </div>
      <div class="jobs">
        <Window icon={JobsIcon} title="Open jobs" greenGlow>
          <h2>Work here</h2>
          <Button>View open jobs</Button>
        </Window>
      </div>
      <div class="governance">
        <Window title="Vote">
          <p>Get involved in<br />governance.</p>
          <a href="https://boardroom.io/radicle/proposals" target="_blank">
            <Button>Vote here</Button>
          </a>
        </Window>
        <img class="governance-image" src="img/voted@2x.png" alt="voted" />
      </div>
      <div class="blog">
        <Window>
          <img class="blog-image" src="img/silver-liquid.gif" alt="liquid metal gif" />
          <h3>Mirror, <span class="open">mirror</span></h3>
          <p>Get updates and insights.</p>
          <Button>Read the blog</Button>
        </Window>
      </div>
    </div>
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

  h2 {
    font-family: Terminal Grotesque;
    font-weight: 400;
    color: var(--color-foreground);
    display: flex;
    align-items: center;
    gap: 24px;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'hero hero'
      'socials socials';
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

  .hero p {
    margin: 0 0 32px 0;
  }

  .hero .pen-illustration {
    height: 32px;
    position: absolute;
    bottom: 8px;
    left: -84px;
    pointer-events: none;
    width: fit-content;
  }

  .social-windows {
    display: flex;
    justify-content: flex-end;
    grid-area: socials;
    gap: 10%;
    padding: 98px 8% 0 0;
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

  img.chat-message.outgoing {
    padding: 0;
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

  .dove {
    height: 240px;
    top: 0;
    right: 0;
    transform: translate(55%, -35%);
    position: absolute;
    z-index: 2;
  }

  .social-windows p {
    margin: 0 0 16px 0;
  }

  .projects {
    background-color: var(--color-background);
    padding: 32px;
    margin-bottom: 140px;
  }

  .projects-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .drips {
    margin-top: 198px;
  }

  .project h2 {
    display: flex;
    font-size: 112px;
    margin: 64px 0 0 0;
    padding-left: 24px;
    justify-content: flex-start;
  }

  .project p.subheader {
    display: flex;
    align-items: center;
    padding: 6px 24px;
    width: -webkit-fit-content;
    width: fit-content;
    color: var(--color-foreground);
    background: var(--color-background);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.25);
    border-radius: 60px;
    position: relative;
    z-index: 1;
  }

  .project-image {
    filter: drop-shadow(24px 20px 68px rgba(0, 0, 0, 0.25));
    border-radius: 4px 4px 24px 24px;
    object-fit: 'contain';
    width: 100%;
  }

  .resources {
    background-color: var(--color-foreground-level-2);
    padding: 32px;
  }

  .resources h1 {
    margin-top: -240px;
    padding-bottom: 60px;
  }

  .resources-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(12, minmax(auto, 80px));
    grid-column-gap: 48px;
    grid-template-rows: repeat(16, 42px);
    grid-row-gap: 0px;
    white-space: nowrap;
  }

  .jobs h2 {
    color: var(--color-foreground);
    font-size: 76px;
    margin: 0 0 20px 0;
  }

  .forum {
    grid-column-start: 2;
    grid-row-start: 5;
    position: relative;
  }

  .forum h3 {
    margin-top: 140px;
    margin-bottom: 8px;
  }

  .forum .forum-image {
    position: absolute;
    top: -120px;
    left: -10px;
  }

  .jobs {
    grid-column-start: 7;
    grid-row-start: 1;
  }

  .blog {
    position: relative;
    grid-column-start: 6;
    grid-row-start: 11;
  }

  .blog .blog-image {
    position: absolute;
    max-height: 224px;
    right: -80px;
    top: -110px;
  }

  .governance {
    position: relative;
    grid-column-start: 10;
    grid-row-start: 9;
  }
  .governance p {
    margin-top: 0px;
  }

  .governance .governance-image {
    position: absolute;
    max-width: 420px;
    top: -50px;
    left: -108px;
    z-index: 0;
  }

  @media screen and (max-width: 1060px) {
    .projects-container {
      grid-template-columns: 1fr;
    }
    .drips {
      margin-top: 0;
    }
    .resources h1 {
      margin-top: 0px;
      padding-bottom: 0px;
    }

    .resources-container {
      display: flex;
      flex-direction: column;
      gap: 48px;
      margin-top: 100px;
      padding: 0 6vw;
    }
    .blog,
    .jobs {
      align-self: flex-end;
    }
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

    .project h2 {
      font-size: 15vw;
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

    .hero .pen-illustration {
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);
      left: 144px;
    }

    .social-windows {
      justify-content: flex-start;
      padding: 32px 0 0 0;
      flex-direction: column;
      gap: 32px;
    }

    .dove {
      right: 50%;
      transform: translate(320px, 50px);
    }
  }

  @media screen and (min-width: 1582px) {
    .projects {
      margin-top: -224px;
    }

    .resources {
      border-radius: 32px 32px 0 0;
    }
  }

  @media screen and (max-width: 540px) {
    .project h2 {
      flex-direction: column;
      align-items: flex-start;
    }

    .resources {
      padding: 8px;
    }

    .projects {
      padding: 16px 8px;
      margin-bottom: 24px;
    }

    .dove {
      display: none;
    }

    .resources-container {
      padding: 0;
    }

    .resources-container {
      align-items: center;
    }

    .jobs h2 {
      font-size: 48px;
    }

    .blog,
    .jobs {
      align-self: center;
    }
  }
</style>
