<script>
  import Music from "../assets/music.svelte";
</script>

<div class="wrapper">
  <div class="logo-wrapper">
    <Music height="100%" width="100%" />
    <h2>Music Bot</h2>
  </div>
</div>

<style>
  .wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing);
    box-sizing: border-box;
  }
  .logo-wrapper {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    aspect-ratio: 1;
  }
  h2 {
    text-align: center;
    font-size: 5vh;
    line-height: 6vh;
    margin: 0;
    margin-top: var(--spacing);
    color: var(--text);
  }
</style>
