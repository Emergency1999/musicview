<script>
  export let percentage = 0;
  export let startLabel = undefined;
  export let endLabel = undefined;
</script>

<div class="wrapper">
  {#if startLabel}
    <span class="label">{startLabel}</span>
  {/if}
  <div class="progress-bar">
    <div class="progress-bar__fill" style="width: {percentage}%" />
  </div>
  {#if endLabel}
    <span class="label">{endLabel}</span>
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .label {
    min-width: fit-content;
  }
  .label:first-child {
    margin-right: 0.5rem;
  }
  .label:last-child {
    margin-left: 0.5rem;
  }
  .progress-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    height: var(--height, 2em);
    width: 100%;
    background-color: var(--bg);
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  .progress-bar__fill {
    height: 100%;
    background-color: var(--fill, var(--text-low));
    border-radius: var(--border-radius);
  }
</style>
