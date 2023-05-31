<script lang="ts">
  export let href: string;
  export let target: string | undefined = undefined;
</script>

<a class="body" {href} {target}>
  <slot />
  <div class="line" />
  <div class="line selection-underline" />
</a>

<style>
  a {
    color: var(--color-foreground);
    text-decoration: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 8px 0;
    height: fit-content;
  }

  .line {
    position: absolute;
    height: 3px;
    bottom: 0;
    width: 100%;
    background-color: var(--color-foreground-level-4);
  }

  .selection-underline {
    background-color: var(--color-primary-level-6);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }

  a:hover .selection-underline {
    transform: scaleX(1);
  }

  @media screen and (max-width: 540px) {
    a {
      font-size: 20px;
    }
  }
</style>
