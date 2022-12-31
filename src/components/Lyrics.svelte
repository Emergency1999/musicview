<script lang="ts">
  import lyrics from "global/lyrics";
  import currentSong from "global/currentSong";
  import type { SyncedLyrics, UnsyncedLyrics } from "../types";
  import portrait from "global/portrait";

  let currentLineEle: HTMLElement | null = null;

  $: currentIndex = (() => {
    if ($lyrics.error) return -1;
    let currentLyrics = $lyrics as SyncedLyrics | UnsyncedLyrics;
    if (currentLyrics.syncType === "LINE_SYNCED") {
      let index = currentLyrics.lines.findIndex(
        (line) => line.startTimeMs >= $currentSong.positionInTrack
      );
      if (index === 0) return -1;
      if (index === -1) return currentLyrics.lines.length;
      return index - 1;
    } else if (currentLyrics.syncType === "UNSYNCED") {
      const songPercentage =
        $currentSong.positionInTrack / $currentSong.songDurationMs;
      const lyricsPercentage = currentLyrics.lines.length * songPercentage;
      return Math.floor(lyricsPercentage);
    }
  })();

  $: if (currentLineEle && !$lyrics.error && !$portrait)
    currentLineEle.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
</script>

<div class="wrapper">
  <div class="lyrics">
    <div class="padding_element" />
    {#if $lyrics.error}
      <div class="no-lyrics">
        <p>No Lyrics</p>
      </div>
    {:else}
      {#each $lyrics.lines as line, index}
        {#if index === currentIndex}
          <p class="current" bind:this={currentLineEle}>{line.words}</p>
        {:else}
          <p>{line.words}</p>
        {/if}
      {/each}
    {/if}
    <div class="padding_element" />
  </div>
</div>

<style lang="sass">
  .wrapper
    border-radius: $border-radius
    padding: $spacing
    box-sizing: border-box
    display: flex
    flex-direction: column
    align-items: center
    height: 100%
    width: 100%
    position: absolute
    top: 0
    left: 0
    overflow: auto
    &::-webkit-scrollbar
      width: 0
          
  p
    text-align: center
    margin: calc($spacing / 2) 0
    word-break: break-word
    max-width: 100%
    color: $text-low
    font-size: 3vh
    line-height: 1.5
    &.current
      color: $text

  .padding_element
    height: 100%
    width: 100%

  .no-lyrics
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    border-radius: $border-radius
    background-color: $bg-light
    p
      font-size: 3vh
      line-height: 1.5
      color: $text-low
      text-align: center
      margin: 0
</style>
