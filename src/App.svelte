<script>
  import { onMount } from "svelte";
  import { connectionError } from "./connectionError";
  import Logo from "./lib/Logo.svelte";
  import MainSong from "./lib/MainSong.svelte";
  import QrCode from "./lib/QRCode.svelte";
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
  <section class="section w20" style:justify-content="space-between">
    <Time />
    <Logo />
    {#if $connectionError}
      <div class="error">
        <h3>Connection Error</h3>
        <p>
          Please make sure that the server is running and that the port is
          correct.
        </p>
      </div>
    {:else}
      <QrCode />
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
  }
  .error h3 {
    font-size: 3.5vh;
    line-height: 5vh;
    margin: 0;
    margin-bottom: var(--spacing);
  }
  .error p {
    font-size: 2vh;
    line-height: 1.5;
    margin: 0;
  }
</style>
