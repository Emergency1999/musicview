<script>
  import { connectionError } from "../connectionError";
  import { onMount } from "svelte";
  import Song from "./Song.svelte";
  export let queue = [];
  export let displayedSongs = 5;
  onMount(() => {
    async function fetchData() {
      fetch("http://127.0.0.1:3000/queue")
        .then((res) => res.json())
        .then((data) => {
          queue = data;
          $connectionError = false;
        })
        .catch(() => {
          $connectionError = true;
        });
    }

    const interval = setInterval(fetchData, 3000);
    fetchData();

    return () => clearInterval(interval);
  });
</script>

<div class="wrapper">
  {#each Array.from({ length: displayedSongs }) as _, index}
    {#if queue[index]}
      <Song {...queue[index]} />
    {:else}
      <div class="empty" />
    {/if}
  {:else}
    <span class="no-queue">Keine Songs in Queue</span>
  {/each}
  {#if queue.length > displayedSongs}
    <div class="more">
      <span>+{queue.length - displayedSongs}</span>
    </div>
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-grow: 1;
    position: relative;
  }
  .empty {
    flex: 1 1 0;
  }
  .no-queue {
    color: var(--text);
    font-size: 2.5vh;
    text-align: center;
    width: 100%;
    margin-top: var(--spacing);
    padding: var(--spacing);
  }
  .more {
    --size: 6vh;
    position: absolute;
    bottom: calc(var(--size) / -2);
    right: calc(50% - (var(--size) / 2));
    width: var(--size);
    height: var(--size);
    background: var(--bg2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: var(--shadow);
    font-size: calc(var(--size) / 3);
  }
</style>
