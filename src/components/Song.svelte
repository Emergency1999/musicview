<script lang="ts">
  import Down from "assets/down.svelte";
  import Same from "assets/same.svelte";
  import Up from "assets/up.svelte";
  import type { Song as SongType } from "../types";

  export let song: SongType;

  $: waitingTimeString =
    song.startDate !== undefined
      ? new Date(song.startDate).toLocaleTimeString("de-DE")
      : "Jetzt";
</script>

<div class="wrapper">
  <div class="text-wrapper">
    <div class="cover" style:background-image={"url(" + song.coverURL + ")"} />
    <div class="info-outer">
      <div class="song-info__left">
        <div class="song-info__left--inner">
          <span class="title">{song.name}</span>
          <span class="artist">{song.artist}</span>
          {#if song.dj}
            <span class="added-by">Hinzugefügt von {song.dj}</span>
          {/if}
        </div>
      </div>

      <div class="song-info__right">
        <div class="play-info">
          <span>{waitingTimeString}</span>
        </div>
        <div class="vote-info">
          {#if song.voteSummary !== null}
            <span>{Math.abs(song.voteSummary)}</span>
            <div class="vote-svg">
              {#if song.voteSummary > 0}
                <Up width="100%" height="100%" />
              {:else if song.voteSummary < 0}
                <Down width="100%" height="100%" />
              {:else}
                <Same width="100%" height="100%" />
              {/if}
            </div>
          {/if}
        </div>
        <div class="right_empty" />
      </div>
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
    display: flex    

  .song-info__left
    flex: 1 0 0
    height: 100%
    position: relative

  .song-info__left--inner
    padding: 0 $spacing
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    position: absolute
    top: 0
    left: 0
    box-sizing: border-box
    height: 100%
    width: 100%
  
  .title
    font-size: 3vh
    line-height: 4vh
    font-weight: bold
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    max-width: 100%
  
  .artist
    font-size: 2.5vh
    line-height: 3.5vh
    color: $text-low
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    max-width: 100%
  
  .added-by
    font-size: 1.75vh
    line-height: 2.25vh
    color: $text-low
  
  .song-info__right
    display: flex
    flex-direction: column
    align-items: flex-end
    justify-content: space-between
    height: 100%
    position: relative

  .play-info
    font-size: 2vh
    line-height: 2vh
    color: $text-low
  
  .vote-info
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    font-size: 2.5vh
    line-height: 2.5vh

  .vote-svg
    height: 5vh
    width: 5vh
    color: $text

  .right_empty
    height: 2.5vh
</style>
