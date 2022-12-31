<script lang="ts">
  import ProgressBar from "./ProgressBar.svelte";
  import { getTimeStringFromMS } from "global/functions";
  import currentSong from "global/currentSong";

  $: durationString = getTimeStringFromMS($currentSong.songDurationMs);

  $: positionInTrackString = getTimeStringFromMS($currentSong.positionInTrack);
</script>

<div class="wrapper">
  <div
    class="cover"
    style:background-image={"url(" + $currentSong.coverURL + ")"}
  />

  <div class="lower-wrapper">
    <h1 class="title">{$currentSong.name}</h1>
    <div class="subtitle">
      <span class="artist">{$currentSong.artist}</span>
      {#if $currentSong.dj}
        <span class="added-by">Hinzugefügt von {$currentSong.dj}</span>
      {/if}
    </div>

    <ProgressBar
      percentage={($currentSong.positionInTrack / $currentSong.songDurationMs) *
        100}
      startLabel={positionInTrackString}
      endLabel={durationString}
      --height=".5em"
      --fill="var(--text-low)"
    />
  </div>
</div>

<style lang="sass">
  .wrapper
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    padding: calc($spacing * 2)
    border-radius: $border-radius
    background-color: $bg-light
    box-sizing: border-box
    box-shadow: $shadow
  
  .lower-wrapper
    display: flex
    flex-direction: column
    justify-content: center
    flex-grow: 1
    width: 100%
    padding: $spacing
    @media screen and (orientation: portrait)
      padding: $spacing 0
  
  .cover
    width: 100%
    aspect-ratio: 1
    background-size: cover
  

  .title
    margin: 0
    margin-top: $spacing
    max-width: 100%
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    font-size: 4vh
    line-height: 5vh
  
  .subtitle
    display: flex
    font-size: 1.75vh
    line-height: 2.25vh
    font-weight: bold
    color: $text-low
    margin-bottom: $spacing
  
  .artist
    flex: 1 1 0
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
  
  .artist:not(:last-child)
    margin-right: $spacing
</style>
