<script>
  export let percentage = 0;
  export let startLabel = undefined;
  export let endLabel = undefined;
</script>

<div class="wrapper">
  <div class="progress-bar">
    <div class="progress-bar__fill" style="width: {percentage}%" />
  </div>
  <div class="lower">
    {#if startLabel}
      <span class="label">{startLabel}</span>
    {/if}
    {#if endLabel}
      <span class="label">{endLabel}</span>
    {/if}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .lower {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .label {
    padding-top: calc(var(--spacing) / 2);
    min-width: fit-content;
    font-size: 2vh;
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
    background-color: var(--bg-dark);
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  .progress-bar__fill {
    height: 100%;
    background-color: var(--fill, var(--bg2));
    border-radius: var(--border-radius);
  }
</style>
