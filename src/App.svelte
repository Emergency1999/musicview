<script>
  import { onMount } from "svelte";
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Queue from "./lib/Queue.svelte";
  import Song from "./lib/Song.svelte";
import Volume from "./lib/Volume.svelte";

  export let playing = {
    currentTrack: {
      name: "Songtitel",
      artist: "Artist",
      coverURL: "",
      dj: "DJ",
      playingTime: undefined,
    },
    positionInTrack: 0,
  };

  onMount(() => {
    async function fetchData() {
      fetch("http://127.0.0.1:3000/playing")
        .then((res) => res.json())
        .then((data) => {
          data.currentTrack.playingTime = undefined
          playing = data;
        });
    }

    const interval = setInterval(fetchData, 1000);
    fetchData();

    return () => clearInterval(interval);
  });
</script>

<main>
  <Volume />
  <Song {...playing.currentTrack}/>
  <h1>QUEUE</h1>

  <Queue />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
