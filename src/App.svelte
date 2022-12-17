<script>
  import { onMount } from "svelte";
  import Logo from "./lib/Logo.svelte";
  import MainSong from "./lib/MainSong.svelte";
  import Queue from "./lib/Queue.svelte";
  import Volume from "./lib/Volume.svelte";

  export let playing = {
    currentTrack: {
      name: "Chabos wissen wer der Babo ist (Jazz/Swing Version)",
      artist: "Marti Fischer",
      coverURL:
        "https://i.scdn.co/image/ab67616d00001e02e06457bcad9e375ba856a11c",
      dj: "DJ Fieka",
      songDurationMs: 185000,
      endDate: new Date(),
    },
    positionInTrack: 37000,
  };

  onMount(() => {
    let secondsInterval;
    function resetSeconds() {
      if (secondsInterval) clearInterval(secondsInterval);
      secondsInterval = setInterval(() => {
        playing.positionInTrack += 100;
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
    <Logo />
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
  }
  .w40 {
    width: 40%;
  }
  .w20 {
    width: 20%;
  }
</style>
