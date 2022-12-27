<script>
  import ProgressBar from "./ProgressBar.svelte";

  export let currentTrack = {
    name: "",
    artist: "",
    coverURL: "",
    dj: "",
    songDurationMs: 185000,
    startDate: new Date(),
    positionInTrack: 37000,
  };

  $: durationString = currentTrack.songDurationMs
    ? `${Math.floor(currentTrack.songDurationMs / 1000 / 60)}:${(
        Math.round(currentTrack.songDurationMs / 1000) % 60
      )
        .toString()
        .padStart(2, "0")}`
    : "";

  $: positionInTrackString = currentTrack.positionInTrack
    ? `${Math.floor(currentTrack.positionInTrack / 1000 / 60)}:${(
        Math.round(currentTrack.positionInTrack / 1000) % 60
      )
        .toString()
        .padStart(2, "0")}`
    : "";
</script>

<div class="wrapper">
  <div
    class="cover"
    style:background-image={"url(" + currentTrack.coverURL + ")"}
  />

  <div class="lower-wrapper">
    <h1 class="title">{currentTrack.name}</h1>
    <div class="subtitle">
      <span class="artist">{currentTrack.artist}</span>
      {#if currentTrack.dj}
        <span class="added-by">Hinzugefügt von {currentTrack.dj}</span>
      {/if}
    </div>

    <ProgressBar
      percentage={(currentTrack.positionInTrack / currentTrack.songDurationMs) *
        100}
      startLabel={positionInTrackString}
      endLabel={durationString}
      --height=".5em"
      --fill="var(--text-low)"
    />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: calc(var(--spacing) * 2);
    border-radius: var(--border-radius);
    background-color: var(--bg-light);
    box-sizing: border-box;
    box-shadow: var(--shadow);
  }
  .lower-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
    padding: var(--spacing);
  }
  .cover {
    width: 100%;
    aspect-ratio: 1;
    background-size: cover;
  }

  .title {
    margin: 0;
    margin-top: var(--spacing);
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 5vh;
    line-height: 6vh;
  }
  .subtitle {
    display: flex;
    font-size: 2vh;
    line-height: 3vh;
    font-weight: bold;
    color: var(--text-low);
    margin-bottom: var(--spacing);
  }
  .artist {
    flex: 1 1 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .artist:not(:last-child) {
    margin-right: var(--spacing);
  }
</style>
