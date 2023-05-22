<script lang="ts">
  import { type ComponentType, onMount } from 'svelte';
  import { spring } from 'svelte/motion';

  export let title: string;
  export let icon: ComponentType;

  let windowElem: HTMLDivElement;

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

    return resizeObserver.unobserve;
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
    bind:this={windowElem}
    on:mousedown={startDragging}
    style:transform="translate({$windowOffset.x}px, {$windowOffset.y}px)"
  >
    <div class="title-bar">
      <div class="icon">
        <svelte:component this={icon} />
      </div>
      <p class="tiny">{title}</p>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
  <div class="behind" style:height="{behindElemSize.h}px" style:width="{behindElemSize.w}px">
    <slot name="secret" />
  </div>
</div>

<style>
  .window {
    background-color: var(--color-background);
    position: absolute;
    user-select: none;
    cursor: grab;
    border-radius: 4px 4px 32px 32px;
    overflow: hidden;
    box-shadow: var(--elevation-high);
  }

  .content {
    padding: 32px;
  }

  .title-bar {
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: var(--color-foreground-level-3);
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
    background-color: var(--color-foreground-level-2);
    border-radius: 4px 4px 32px 32px;
    overflow: hidden;
  }
</style>
