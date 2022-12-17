<script>
  import { onMount } from "svelte";
  import { connectionError } from "./connectionError";
  import Logo from "./lib/Logo.svelte";
  import MainSong from "./lib/MainSong.svelte";
  import Queue from "./lib/Queue.svelte";
  import Time from "./lib/Time.svelte";
  import Volume from "./lib/Volume.svelte";

  export let playing = {
    currentTrack: {
      name: "",
      artist: "",
      coverURL: "such-empty.jpg",
      dj: "",
      songDurationMs: 256000,
      endDate: new Date(),
    },
    positionInTrack: 1000,
  };

  onMount(() => {
    let secondsInterval;
    function resetSeconds() {
      if (secondsInterval) clearInterval(secondsInterval);
      secondsInterval = setInterval(() => {
        if (!$connectionError) playing.positionInTrack += 100;
      }, 100);
    }

    async function fetchData() {
      fetch("http://127.0.0.1:3000/playing")
        .then((res) => res.json())
        .then((data) => {
          // Convert to milliseconds
          data.positionInTrack = data.positionInTrack * 1000;

          // if seconds are off by more than 1 seconds, reset seconds
          if (
            Math.abs(data.positionInTrack * 1000 - playing.positionInTrack) >
            1000
          )
            resetSeconds();

          playing = data;
          $connectionError = false;
        })
        .catch(() => {
          $connectionError = true;
        });
    }

    fetchData();
    resetSeconds();
    const fetchInterval = setInterval(fetchData, 3000);

    return () => {
      clearInterval(fetchInterval);
      clearInterval(secondsInterval);
    };
  });
</script>

<main class="main">
  <section class="section w40">
    <MainSong {...playing} />
  </section>
  <section class="section w20">
    <Time />
    <Logo />
    {#if $connectionError}
      <div class="error">
        <h1>Connection Error</h1>
        <p>
          Please make sure that the server is running and that the port is
          correct.
        </p>
      </div>
    {/if}
  </section>
  <section class="section w40">
    <Volume />
    <Queue displayedSongs={6} />
  </section>
</main>

<style>
  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
  }
  .section {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 100%;
    position: relative;
  }
  .w40 {
    width: 40%;
  }
  .w20 {
    width: 20%;
  }
  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 2 * var(--spacing));
    background-color: var(--error);
    border-radius: var(--border-radius);
    text-align: center;
    padding: var(--spacing);
    box-sizing: border-box;
    margin: 0 var(--spacing);
    position: absolute;
    bottom: 0;
  }
</style>
