<script lang="ts">
  import { connectionError } from "./global/connectionError";
  import Logo from "./components/Logo.svelte";
  import MainSong from "./components/MainSong.svelte";
  import QrCode from "./components/QRCode.svelte";
  import Queue from "./components/Queue.svelte";
  import Time from "./components/Time.svelte";
  import Volume from "./components/Volume.svelte";
  import "./app.sass";
  import Lyrics from "components/Lyrics.svelte";
</script>

<svelte:head>
  <style lang="sass">

  </style>
</svelte:head>

<main class="main">
  <section class="section w40">
    <MainSong />
  </section>
  <section class="section w20" style:justify-content="space-between">
    <div class="time_wrapper">
      <div class="grow-2">
        <Logo />
      </div>
      <div>
        <Time />
      </div>
      {#if $connectionError}
        <div class="error grow-2">
          <h3>Connection Error</h3>
          <p>
            Please make sure that the server is running and that the port is
            correct.
          </p>
        </div>
      {:else}
        <div class="grow-2">
          <QrCode />
        </div>
      {/if}
    </div>
    <div class="lyrics">
      <Lyrics />
    </div>
  </section>
  <section class="section w40">
    <Volume />
    <Queue displayedSongs={6} />
  </section>
</main>

<style lang="sass">
  .main
    display: flex
    flex-direction: row
    justify-content: space-between
    height: 100%
  .section
    display: flex
    flex-direction: column
    height: 100%
    width: 100%
    max-width: 100%
    position: relative
  .w40
    width: 33%
  .w20
    width: 33%
  .time_wrapper
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    max-width: 100%
    position: relative
    padding: 0 $spacing $spacing
    box-sizing: border-box
    >*
      flex: 1 0 0
      &:not(:last-child)
        margin-right: calc($spacing / 2)
      &:not(:first-child)
        margin-left: calc($spacing / 2)
  .grow-2
    flex: 2 0 0
  .error
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: calc(100% - #{2 * $spacing})
    background-color: $error
    border-radius: $border-radius
    text-align: center
    padding: $spacing
    box-sizing: border-box
    margin: 0 $spacing
    h3
      font-size: 3.5vh
      line-height: 5vh
      margin: 0
      margin-bottom: $spacing
    p
      font-size: 2vh
      line-height: 1.5
      margin: 0
  .lyrics
    display: flex
    align-items: center
    justify-content: center
    width: calc(100% - 2 * $spacing)
    max-width: 100%
    position: relative
    flex-grow: 1
    margin: 0 $spacing
</style>
