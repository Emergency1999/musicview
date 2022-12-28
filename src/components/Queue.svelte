<script lang="ts">
  import Song from "./Song.svelte";
  import queue from "global/queue";
  export let displayedSongs = 5;
</script>

<div class="wrapper">
  {#if $queue.length === 0}
    <span class="no-queue">Keine Songs in Queue</span>
  {/if}
  {#each Array.from({ length: displayedSongs }) as _, index}
    {#if $queue[index]}
      <Song song={$queue[index]} />
    {:else}
      <div class="empty" />
    {/if}
  {/each}
  {#if $queue.length > displayedSongs}
    <div class="more">
      <span>+{$queue.length - displayedSongs}</span>
    </div>
  {/if}
</div>

<style lang="sass">
  .wrapper
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    flex-grow: 1
    position: relative
  
  .empty
    flex: 1 1 0
  
  .no-queue
    color: $text
    font-size: 2.5vh
    text-align: center
    width: 100%
    margin-top: $spacing
    padding: $spacing
  
  .more
    --size: 6vh
    position: absolute
    bottom: calc(var(--size) / -2)
    right: calc(50% - (var(--size) / 2))
    width: var(--size)
    height: var(--size)
    background: $bg2
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    box-shadow: $shadow
    font-size: calc(var(--size) / 3)

</style>
