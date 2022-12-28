<script lang="ts">
  import type { Song as SongType } from "../types";

  export let song: SongType;

  const { name, artist, coverURL, dj, songDurationMs, startDate } = song;

  $: waitingTimeString =
    startDate !== undefined
      ? new Date(startDate).toLocaleTimeString("de-DE")
      : "Jetzt";
</script>

<div class="wrapper">
  <div class="text-wrapper">
    <div class="cover" style:background-image={"url(" + coverURL + ")"} />
    <div class="info-outer">
      <div class="song-info">
        <span class="title">{name}</span>
        <span class="artist">{artist}</span>
        {#if dj}
          <span class="added-by">Hinzugefügt von {dj}</span>
        {/if}
      </div>
    </div>
    <div class="play-info">
      <span>{waitingTimeString}</span>
    </div>
  </div>
</div>

<style lang="sass">
  .wrapper
    padding: $spacing
    border-radius: $border-radius
    width: 100%
    background-color: $bg-light
    margin-top: $spacing
    position: relative
    flex: 1 1 0
    box-sizing: border-box
    box-shadow: $shadow
    max-height: 30vh
  
  .text-wrapper
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    height: 100%
  
  .cover
    height: 100%
    aspect-ratio: 1
    background-size: cover
  
  .info-outer
    height: 100%
    flex: 1 1 0
    position: relative
  
  .song-info
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%
    max-width: 100%
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    padding: 0 $spacing
  
  .title
    font-size: 2.5vh
    line-height: 3.5vh
    font-weight: bold
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    max-width: 100%
  
  .artist
    font-size: 1.75vh
    line-height: 2.25vh
    color: $text-low
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    max-width: 100%
  
  .added-by
    font-size: 1.5vh
    line-height: 2.25vh
    color: $text-low
  
  .play-info
    position: absolute
    top: 0
    right: 0
    padding: $spacing
    font-size: 2vh
    line-height: 2vh
    color: $text-low
</style>
