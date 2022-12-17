<script>
  import { onMount } from "svelte";
  import ProgressBar from "./ProgressBar.svelte";
  export let volume = 50;

  onMount(() => {
    async function fetchData() {
      fetch("http://127.0.0.1:3000/volume")
        .then((res) => res.json())
        .then((data) => {
          volume = data;
        });
    }

    const interval = setInterval(fetchData, 2000);
    fetchData();

    return () => clearInterval(interval);
  });
</script>

<div class="wrapper">
  <div class="label-wrapper">
    <span class="label">Volume</span>
  </div>
  <ProgressBar percentage={volume} --bg="var(--bg-light)" />
</div>

<style>
  .wrapper {
    position: relative;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
  }
  .label-wrapper {
    min-width: fit-content;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .label {
    font-size: 1.5em;
    line-height: 1.5em;
    font-weight: bold;
    text-align: center;
  }
</style>
