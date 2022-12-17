<script>
  import ProgressBar from "./ProgressBar.svelte";

  export let name = "Songtitel";
  export let artist = "Artist";
  export let coverURL = "";
  export let dj = "DJ";
  export let songDurationMs = undefined;
  export let positionInTrack = undefined;
  export let startDate = undefined;

  $: waitingTimeString =
    startDate !== undefined
      ? new Date(startDate).toLocaleTimeString("de-DE")
      : "Jetzt";

  $: durationString = songDurationMs
    ? `${Math.floor(songDurationMs / 1000 / 60)}:${Math.round(
        (songDurationMs / 1000) % 60
      )
        .toString()
        .padStart(2, "0")}`
    : "";

  $: positionInTrackString = positionInTrack
    ? `${Math.floor(positionInTrack / 1000 / 60)}:${Math.round(
        (positionInTrack / 1000) % 60
      )
        .toString()
        .padStart(2, "0")}`
    : "";
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
  {#if positionInTrack}
    <ProgressBar
      percentage={(positionInTrack / songDurationMs) * 100}
      startLabel={positionInTrackString}
      endLabel={durationString}
      --height=".5em"
      --fill="var(--text-low)"
    />
  {/if}
</div>

<style>
  .wrapper {
    padding: var(--spacing);
    border-radius: var(--border-radius);
    width: 100%;
    background-color: var(--bg-light);
    margin-top: var(--spacing);
    position: relative;
    flex: 1 1 0;
    box-sizing: border-box;
    box-shadow: var(--shadow);
  }
  .text-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .cover {
    height: 100%;
    aspect-ratio: 1;
    background-size: cover;
  }
  .info-outer {
    height: 100%;
    flex: 1 1 0;
    position: relative;
  }
  .song-info {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 var(--spacing);
  }
  .title {
    font-size: 2.5vh;
    line-height: 3.5vh;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
  .artist {
    font-size: 1.75vh;
    line-height: 2.25vh;
    color: var(--text-low);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
  .added-by {
    font-size: 1.5vh;
    line-height: 2.25vh;
    color: var(--text-low);
  }
  .play-info {
    position: absolute;
    top: 0;
    right: 0;
    padding: var(--spacing);
    font-size: 2vh;
    line-height: 2vh;
    color: var(--text-low);
  }
</style>
