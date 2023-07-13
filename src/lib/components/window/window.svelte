<script lang="ts">
  import { type ComponentType, onMount } from 'svelte';
  import { spring } from 'svelte/motion';

  export let title: string | undefined = undefined;
  export let icon: ComponentType | undefined = undefined;
  export let greenGlow = false;
  export let maxWidth: number | undefined = undefined;

  let windowElem: HTMLDivElement;

  let hover = false;
  let behindElemSize: { w: number; h: number } = { w: 0, h: 0 };

  function updateBehindElemSize() {
    behindElemSize = {
      w: windowElem.offsetWidth,
      h: windowElem.offsetHeight
    };
  }

  onMount(() => {
    const resizeObserver = new ResizeObserver(updateBehindElemSize);
    resizeObserver.observe(windowElem);
  });

  let isDragging = false;
  let dragClickStart: { x: number; y: number } | undefined;
  let windowOffset = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.1,
      damping: 0.25
    }
  );

  function startDragging(e: MouseEvent) {
    isDragging = true;
    dragClickStart = { x: e.clientX, y: e.clientY };

    window.onmouseup = stopDragging;
    window.onmousemove = drag;
  }

  let prevDrag: { x: number; y: number } | undefined;
  function drag(e: MouseEvent) {
    if (!isDragging || !dragClickStart) return;

    if (!prevDrag) {
      prevDrag = dragClickStart;
      return;
    }

    document.body.style.cursor = 'grabbing';
    windowElem.style.cursor = 'grabbing';
    windowElem.style.zIndex = '100';

    const { clientX, clientY } = e;

    const distanceToDragStart = Math.sqrt(
      Math.pow(clientX - dragClickStart.x, 2) + Math.pow(clientY - dragClickStart.y, 2)
    );

    const multiplier = 1 + distanceToDragStart / 200;

    const deltaX = (clientX - prevDrag.x) / multiplier;
    const deltaY = (clientY - prevDrag.y) / multiplier;

    windowOffset.update((v) => ({
      x: v.x + deltaX,
      y: v.y + deltaY
    }));

    prevDrag = { x: e.clientX, y: e.clientY };
  }

  function stopDragging() {
    isDragging = false;

    document.body.style.cursor = '';
    windowElem.style.cursor = 'grab';
    windowElem.style.zIndex = '';

    windowOffset.set({ x: 0, y: 0 });
    dragClickStart = undefined;
    prevDrag = undefined;
    window.onmouseup = null;
    window.onmousemove = null;
  }
</script>

<div class="wrapper">
  <div
    class="window"
    style:max-width="{maxWidth}px"
    class:hover
    bind:this={windowElem}
    on:mousedown={startDragging}
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
    style:transform="translate({$windowOffset.x}px, {$windowOffset.y}px)"
    class:green-glow={greenGlow}
  >
    {#if title}
      <div class="title-bar">
        {#if icon}
          <div class="icon">
            <svelte:component this={icon} />
          </div>
        {/if}
        <p class="tiny">{title}</p>
      </div>
    {/if}
    <div class="content">
      <slot />
    </div>
  </div>
  <div class="behind" style:height="{behindElemSize.h}px" style:width="{behindElemSize.w}px">
    <slot name="secret" />
  </div>
</div>

<style>
  .wrapper {
    pointer-events: initial;
  }

  .window {
    background-color: var(--color-background);
    position: absolute;
    user-select: none;
    cursor: grab;
    border-radius: 4px 4px 32px 32px;
    box-shadow: var(--elevation-high);
    background-color: var(--color-foreground-level-1);
    z-index: 1;
    transition: box-shadow 0.3s;
  }

  .window.green-glow {
    box-shadow: 24px 20px 68px #53db53;
  }

  .content {
    padding: 32px;
  }

  .title-bar {
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 4px 4px 0 0;
    background-color: var(--color-foreground-level-2);
  }

  .title-bar p {
    margin: 0;
    line-height: 100%;
  }

  .title-bar .icon {
    width: 16px;
    height: 16px;
  }

  .behind {
    border-radius: 4px 4px 32px 32px;
    overflow: hidden;
  }
</style>
