<script lang="ts">
</script>

<button on:click class="body">
  <div class="inner">
    <slot />
  </div>
</button>

<style>
  button {
    background: none;
    outline: none;
    border: none;
    padding: 4px 0;
  }

  button .inner {
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background-color: var(--color-positive);
    color: #28333d;
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  button:hover .inner {
    transform: translateY(-4px);
    box-shadow: 0 4px 0 var(--color-positive-level-6);
  }

  button:active .inner {
    transform: translateY(-2px);
    box-shadow: 0 2px 0 var(--color-positive-level-6);
  }

  button:focus-visible .inner {
    outline: 2px solid var(--color-positive-level-6);
    outline-offset: 2px;
  }
</style>
