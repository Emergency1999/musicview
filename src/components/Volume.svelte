<script>
  import volume from "global/volume";
  import ProgressBar from "./ProgressBar.svelte";
</script>

<div class="wrapper">
  <div class="label-wrapper">
    <span class="label">Volume</span>
  </div>
  <ProgressBar percentage={$volume} --bg="var(--bg-light)" --height="5vh" />
</div>

<style lang="sass">
  .wrapper
    position: relative
    border-radius: $border-radius
    box-shadow: $shadow
  
  .label-wrapper
    min-width: fit-content
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%
    display: flex
    align-items: center
    justify-content: center
  
  .label
    font-size: 3vh
    line-height: 3vh
    font-weight: bold
    text-align: center

</style>
