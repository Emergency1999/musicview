<script>
  import { onMount } from "svelte";

  let time = new Date();

  onMount(() => {
    let setNow;
    function setNowInterval() {
      if (setNow) clearInterval(setNow);
      setNow = setInterval(() => {
        time = new Date();
      }, 1000);
    }
    setNowInterval();
  });
</script>

<div class="wrapper">
  <h2>{time.toLocaleTimeString("de-DE")}</h2>
</div>

<style>
  .wrapper {
    width: 100%;
    padding: var(--spacing);
    text-align: center;
  }
  h2 {
    font-size: 5vh;
    color: var(--text-low);
    margin: 0;
  }
</style>
