<script lang="ts">
  import { connectionError } from "./global/connectionError";
  import Logo from "./components/Logo.svelte";
  import MainSong from "./components/MainSong.svelte";
  import QrCode from "./components/QRCode.svelte";
  import Queue from "./components/Queue.svelte";
  import Time from "./components/Time.svelte";
  import Volume from "./components/Volume.svelte";
  import "./app.sass";
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
    width: 40%
  .w20
    width: 20%
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
</style>
