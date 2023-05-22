<script>
  import Button from '$lib/components/button/button.svelte';
  export let imgUrl = '';
  export let title = '';
  export let btnTxt = '';
</script>

<div class="floater">
  <div class="grey">
    <img src={imgUrl} alt="" />
    <h3>{title}</h3>
  </div>
  <slot />
  <div style="margin: 0 32px 32px 32px;">
    <Button>{btnTxt}</Button>
  </div>
</div>

<style>
  .floater {
    display: grid;
    grid-template-rows: 32px auto auto;
    background: var(--color-foreground);
    background-blend-mode: soft-light;
    mix-blend-mode: normal;
    box-shadow: 24px 20px 68px rgba(0, 0, 0, 0.25);
    border-radius: 4px 4px 40px 40px;
    width: fit-content;
    height: fit-content;
  }
  .grey {
    height: 32px;
    background-color: var(--color-foreground-level-2);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    margin-bottom: 32px;
  }
  h3 {
    font-family: 'Terminal Grotesque';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--color-foreground);
  }
</style>
