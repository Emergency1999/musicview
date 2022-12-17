<script>
  import { onMount } from "svelte";
  import Song from "./Song.svelte";
  export let queue = [
    {
      name: "Chabos wissen wer der Babo ist (Jazz/Swing Version)",
      artist: "Marti Fischer",
      coverURL:
        "https://i.scdn.co/image/ab67616d00001e02e06457bcad9e375ba856a11c",
      dj: "DJ Fieka",
      playingTime: Math.round(Math.random() * 60 + 127) * 1000,
      startTime: new Date(Date.now() + Math.round(Math.random() * 60 + 127)),
    },
  ];
  export let displayedSongs = 5;
  onMount(() => {
    async function fetchData() {
      fetch("http://127.0.0.1:3000/queue")
        .then((res) => res.json())
        .then((data) => {
          queue = data;
        });
    }

    const interval = setInterval(fetchData, 3000);
    fetchData();

    return () => clearInterval(interval);
  });
</script>

<div class="wrapper">
  {#each queue.slice(0, displayedSongs) as song}
    <Song {...song} />
  {/each}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-grow: 1;
  }
</style>
