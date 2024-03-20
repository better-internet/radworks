<script>
  import Button from '$lib/components/button/button.svelte';
  import DiscordIcon from '$lib/components/illustrations/discord-icon.svelte';
  import JobsIcon from '$lib/components/illustrations/jobs-icon.svelte';
  import XIcon from '$lib/components/illustrations/x-icon.svelte';
  import IllustrationHost from '$lib/components/illustrations/illustration-host.svelte';
  import IllustrationCollaborate from '$lib/components/illustrations/illustration-collaborate.svelte';
  import IllustrationReward from '$lib/components/illustrations/illustration-reward.svelte';
  import Window from '$lib/components/window/window.svelte';
</script>

<div>
  <div class="hero" data-theme="dark">
    <p class="big">
      We’re building a <span class="open">sovereign developer stack</span>.
    </p>
    <a href="https://docs.radworks.org" target="_blank">
      <Button>Learn more</Button>
    </a>
  </div>
  <div class="social-windows">
    <div>
      <Window icon={DiscordIcon} title="Discord">
        <div class="chat">
          <p class="chat-message incoming" data-theme="dark">Let’s chat on Discord!</p>
          <img
            class="outgoing chat-message"
            src="img/house-plant.gif"
            alt="animation of multiple houseplants"
          />
          <p class="chat-message outgoing" data-theme="dark">Waddap</p>
        </div>
        <a href="https://discord.gg/radworks" target="_blank">
          <Button>Check out the Discord</Button>
        </a>
      </Window>
    </div>
    <div>
      <Window icon={XIcon} title="X • @radworks_">
        <img class="dove" src="img/flying-dove.gif" alt="flying dove gif" />
        <div class="twitter">
          <p>Keep up with our posts.</p>
          <a href="https://x.com/radworks_" target="_blank">
            <Button>Follow us on X</Button>
          </a>
        </div>
      </Window>
    </div>
  </div>
  <div class="projects" id="projects">
    <h1 class="intro">
      Radworks enables developers to securely <span>host</span>, <span>collaborate on</span>, and
      <span>reward</span> open-source code.
    </h1>
    <div class="projects-container">
      <div class="project">
        <div class="info">
          <h2>Collaborate</h2>
          <a href="https://radicle.xyz/" target="_blank">
            <Button>Check out Radicle</Button>
          </a>
          <p class="subheader">
            Radicle is a sovereign peer-to-peer network for code collaboration, built on top of Git.
          </p>
        </div>
        <div class="project-image">
          <IllustrationCollaborate />
        </div>
      </div>
      <div class="project">
        <div class="info">
          <h2>Host</h2>
          <a href="https://docs.radworks.org/" target="_blank">
            <Button>Learn more</Button>
          </a>
          <p class="subheader">
            Radworks powers a network of infrastructure providers that enable reliable hosting and
            collaboration services for Radicle users.
          </p>
          <div class="coming-soon">Coming soon!</div>
        </div>
        <div class="project-image">
          <IllustrationHost />
        </div>
      </div>
      <div class="project">
        <div class="info">
          <h2>Reward</h2>
          <a href="https://drips.network/" target="_blank">
            <Button>Check out Drips</Button>
          </a>
          <p class="subheader">
            Drips is a decentralized toolkit for funding critical software dependencies.
          </p>
        </div>
        <div class="project-image">
          <IllustrationReward />
        </div>
      </div>
    </div>
  </div>
  <div class="resources">
    <div class="resources-container">
      <div class="jobs">
        <Window icon={JobsIcon} title="Open positions" greenGlow>
          <h2>Work here</h2>
          <a
            href="https://www.notion.so/forest-text-046/Join-Radworks-293d87eb4f1e4b7b86137a847254951e?pvs=4"
            target="_blank"
          >
            <Button>View open positions</Button>
          </a>
        </Window>
      </div>
      <div class="governance">
        <Window title="Vote">
          <p>Get involved in<br />governance.</p>
          <a href="https://www.tally.xyz/gov/radworks" target="_blank">
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
          <a href="https://radworks.mirror.xyz/" target="_blank">
            <Button>Read the blog</Button>
          </a>
        </Window>
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
    font-weight: 400;
    margin: 0;
    color: var(--color-primary);
  }

  h2 {
    font-family: Terminal Grotesque;
    font-weight: 400;
    margin: 0;
    color: var(--color-foreground);
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
    display: flex;
    background-color: var(--color-foreground-level-2);
    padding: 32px;
    color: var(--color-foreground);
    padding-bottom: 256px;
    margin-bottom: -256px;
    justify-content: center;
    text-align: center;
    text-wrap: balance;
    gap: 2vw;
    flex-direction: column;
  }

  .social-windows {
    display: flex;
    justify-content: flex-end;
    grid-area: socials;
    gap: 10%;
    padding: 98px 8% 0 0;
    align-items: center;
    position: relative;
    pointer-events: none;
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
    padding: 5vw;
  }

  .projects-container {
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 4vw;
  }

  .projects h1.intro {
    text-align: center;
    color: var(--color-foreground);
    font-family: Terminal Grotesque;
    text-wrap: balance;
    line-height: 100%;
    margin-top: 2rem;
  }

  .projects h1.intro span {
    font-family: Terminal Grotesque Open;
  }

  .project {
    display: flex;
    gap: 6rem;
    align-items: center;
    flex-direction: row-reverse;
  }

  .project:nth-child(2n) {
    flex-direction: row;
  }

  .project h2 {
    font-size: 6vw;
  }

  .project .info {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 50%;
  }

  .project p.subheader {
    display: flex;
    align-items: center;
    padding: 16px;
    width: -webkit-fit-content;
    width: fit-content;
    color: var(--color-foreground);
    background: var(--color-background);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    position: relative;
    z-index: 1;
    margin: 0;
  }

  .coming-soon {
    display: flex;
    align-items: center;
    background: var(--color-caution);
    width: 4.5rem;
    height: 4.5rem;
    text-align: center;
    font-family: Terminal Grotesque;
    border-radius: 100%;
    transform: rotate(15deg);
    font-size: 1rem;
    align-self: end;
    position: relative;
    top: -50px;
    right: 30px;
    z-index: 100;
  }

  .project-image {
    width: 50%;
  }

  .resources {
    background-color: var(--color-foreground-level-2);
    padding: 32px;
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
    margin: 0 0 20px 0;
    font-size: 4vw;
  }

  .jobs {
    grid-column-start: 2;
    grid-row-start: 1;
  }

  .blog {
    position: relative;
    grid-column-start: 5;
    grid-row-start: 8;
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
    grid-row-start: 4;
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
    .project-image {
      width: 100%;
    }

    .project,
    .project:nth-child(2n) {
      flex-direction: column-reverse;
      gap: 0;
    }

    .project h2 {
      font-size: 8vw;
    }

    .project .info {
      width: auto;
    }

    .hero {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        'hero'
        'socials';
      justify-content: flex-start;
    }

    .social-windows {
      justify-content: flex-start;
      padding: 32px 0 0 0;
      flex-direction: column;
      gap: 32px;
      padding: 16px;
    }

    .social-windows > *:first-child {
      align-self: flex-end;
    }

    .social-windows > *:last-child {
      align-self: baseline;
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
    .hero {
      padding: 16px;
      padding-bottom: 272px;
    }

    .project h2 {
      flex-direction: column;
      align-items: flex-start;
    }

    .project .info {
      padding-left: 0;
      flex-direction: column;
      align-items: baseline;
      gap: 16px;
    }

    .project p.subheader {
      box-shadow: none;
      background-color: transparent;
      padding: 0;
    }

    .resources {
      padding: 16px;
    }

    .projects {
      padding: 32px 16px 16px 16px;
      margin-bottom: 24px;
    }

    .projects-container {
      margin-top: 16px;
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
